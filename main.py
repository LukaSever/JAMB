from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)
DB = "jamb.db"

def init_db():
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS celije (
              red TEXT,
              kolona INTEGER,
              vrednost INTEGER
            )
    ''')
    conn.commit()
    conn.close()

init_db()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/sacuvaj", methods=["POST"])
def sacuvaj():
    data = request.json
    red = data.get("red")
    kolona = data.get("kolona")
    vrednost = data.get("vrednost")

    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute("SELECT * FROM celije WHERE red=? AND kolona=?", (red, kolona))
    if c.fetchone():
        c.execute("UPDATE celije SET vrednost=? WHERE red=? AND kolona=?", (vrednost, red, kolona))
    else:
        c.execute("INSERT INTO celije (red, kolona, vrednost) VALUES (?, ?, ?)", (red, kolona, vrednost))
    conn.commit()
    conn.close()
    return jsonify({"status": "ok"})

@app.route("/ucitaj", methods=["GET"])
def ucitaj():
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute("SELECT * FROM celije")
    podaci = [{"red": r, "kolona": k, "vrednost": v} for r, k, v in c.fetchall()]
    conn.close()
    return jsonify(podaci)

@app.route("/nova_partija", methods=["POST"])
def nova_partija():
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute("DELETE FROM celije")
    conn.commit()
    conn.close()
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    app.run(debug=True)