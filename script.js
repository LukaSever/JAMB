let trenutniJezik = localStorage.getItem("jezik");
if (!trenutniJezik) {
    let jezik = navigator.language;
    trenutniJezik = jezik.substring(0, 2);
    const podrzaniJezici = ["sr", "en", "hr", "bs", "mk", "sl", "me"];
    if (!podrzaniJezici.includes(trenutniJezik))
        trenutniJezik = "en";
}
const zaglavlja = ["YAMB", "", "", "", "N", "R", "D", "", "", "O", "M", "S"];
const broj = zaglavlja.length;
let zvuk;
let kocke = ['?', '?', '?', '?', '?', '?'];
let zadrzi = [false, false, false, false, false, false];
let brojBacanja = 0;
let kockeDugmiciVidljivost = false;
let bacanjeUToku = false;
let poslednjiPotez = [];
let mozeUndo = false;
const sacuvanaIstorija = localStorage.getItem("poslednjiPotez");
if (sacuvanaIstorija)
    poslednjiPotez = JSON.parse(sacuvanaIstorija);
else
    poslednjiPotez = [];
let ukupnoPoena = 0;
let sortiranjePrikaza = {
    kolona: "datum",
    smer: "opadajuce"
};

function zaglavlje1(tabela) {
    const novRed = tabela.insertRow();
    novRed.id = `red-0`;
    for (let i = 0; i < broj; i++) {
        const zaglavlje = document.createElement("th");

        if (zaglavlja[i] === "S") {
            const dugme = document.createElement("button");
            dugme.className = "dugme_tabela";
            const slika = document.createElement("img");
            slika.className = "slika_celija";
            slika.src = "static/images/cells/setting.png";
            dugme.appendChild(slika);
            dugme.style.backgroundColor = "yellow";
            dugme.onclick = () => location.href = "podesavanja.html";
            zaglavlje.appendChild(dugme);
        } else
            zaglavlje.textContent = zaglavlja[i];

        novRed.appendChild(zaglavlje);
        if (i === 5) {
            zaglavlje.style.borderLeft = '2px solid black';
            zaglavlje.style.borderRight = '2px solid black';
        }
    }
}

function podnozje(tabela) {
    const novRed = tabela.insertRow();
    novRed.id = `red-16`;

    const th = document.createElement("th");
    th.setAttribute("colspan", "9");
    const dugme = document.createElement("button");
    dugme.className = "dugme_tabela";
    //dugme.textContent = "Nova partija";
    dugme.dataset.i18n = "ui.nova_partija";
    dugme.onclick = novaPartija;
    th.appendChild(dugme);
    novRed.appendChild(th);
    postaviJezik(trenutniJezik);

    const poeni = document.createElement("th");
    poeni.id = "poeni";
    poeni.setAttribute("colspan", "3");
    poeni.textContent = "";
    novRed.appendChild(poeni);
}

function manipulacijaKolonama(i, j, novaCelija) {
    const imena = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        8: "MAX",
        9: "MIN",
        11: "KENTA",
        12: "TRILING",
        13: "FUL",
        14: "POKER",
        15: "YAMB"
    };
    if (j === 0) {
        const zaglavlje = document.createElement("th");
        zaglavlje.textContent = imena[i];
        novaCelija.replaceWith(zaglavlje);
        return;
    } else if (j === 5) {
        novaCelija.style.borderLeft = '2px solid black';
        novaCelija.style.borderRight = '2px solid black';
    } else if (j === 10)
        novaCelija.style.pointerEvents = "none";

    novaCelija.addEventListener("click", dodavanjeBrojeva);
}

function manipulacijaSumama(tabela, naziv) {
    let suma = tabela.querySelector(`#${naziv}`);
    if (!suma) {
        suma = tabela.insertRow();
        suma.id = naziv;
        for (let i = 0; i < broj; i++) {
            const novaCelija = suma.insertCell();
            if (i === 0) {
                const sume = document.createElement("th");
                sume.textContent = "";
                novaCelija.replaceWith(sume);
            } else if (i === 5) {
                novaCelija.style.borderLeft = '2px solid black';
                novaCelija.style.borderRight = '2px solid black';
            }
        }
    }
    return suma;
}

function slika(tabela) {
    const vrednostSlike = [1, 2, 3, 7, 8];
    const verdnostSume = [7, 10, 16];
    for (let i = 0; i < 5; i++) {
        const slika = document.createElement("img");
        slika.className = "slika_celija";
        slika.src = "static/images/cells/image" + (i + 1) + ".png";
        tabela.rows[0].cells[vrednostSlike[i]].appendChild(slika);
    }
    for (let i = 0; i < 3; i++) {
        const suma = document.createElement("img");
        suma.className = "slika_celija";
        suma.src = "static/images/cells/sum.png";
        tabela.rows[verdnostSume[i]].cells[0].appendChild(suma);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    zvuk = document.getElementById("zvuk_najave");
    if (zvuk) {
        zvuk.pause();
        zvuk.currentTime = 0;
        zvuk.load();
    }

    centrirajSkrolPodesavanja();

    kockeDugmiciVidljivost = localStorage.getItem("kockeDugmiciVidljivost") === "1";

    if (!localStorage.getItem("partijaId"))
        localStorage.setItem("partijaId", crypto.randomUUID());

    const div = document.getElementById("igra")
    const tabela = document.createElement("table");
    if (div) {
        div.appendChild(tabela);
        zaglavlje1(tabela);
        div1(tabela);
        suma1(tabela);
        div2(tabela);
        suma2(tabela);
        div3(tabela);
        suma3(tabela);
        podnozje(tabela);
        suma4(tabela);
        slika(tabela);
        ucitajCelije(tabela);
        osveziRezultate(tabela);
        ucitajKockeDugmice();
        kockeDugmiciVidljivost
            ? prikaziKockeDugmice()
            : sakrijKockeDugmice();
    }

    azurirajKockiceUI();
    if (poslednjiPotez.length > 0)
        mozeUndo = true;

    let dugme = document.getElementById(trenutniJezik);
    if (dugme)
        dugme.classList.add("active");

    const boxZastave = document.getElementById("box_zastave");
    if (boxZastave && dugme)
        boxZastave.insertBefore(dugme, boxZastave.firstChild);

    document.querySelectorAll(".button_jezici").forEach(dugme => {
        dugme.addEventListener("click", () => {
            document.querySelectorAll(".button_jezici").forEach(btn => btn.classList.remove("active"));
            dugme.classList.add("active");
            localStorage.setItem("jezik", dugme.id);
            setTimeout(() => {
                boxZastave.insertBefore(dugme, boxZastave.firstChild);
            }, 10);
        });
    });

    const dugmeZatvoriSliku = document.querySelector(".class_fullscreen_preklapanje .zatvori_sliku");
    const preklapanje = document.getElementById("id_fullscreen_preklapanje");
    const slikaTabela = document.getElementById("fullscreen_slika");

    if (dugmeZatvoriSliku && preklapanje && slikaTabela) {
        dugmeZatvoriSliku.addEventListener("click", () => {
            preklapanje.style.display = "none";
            slikaTabela.src = "";
        });
    }

    function restartVisineBodyIgra() {
        const bodyIgra = document.getElementById('body_igra');
        const igra = document.getElementById('igra');
        if (!bodyIgra || !igra)
            return
        const visina = window.innerHeight + 'px';
        bodyIgra.style.height = visina;
        igra.style.height = visina;
    }
    window.addEventListener('load', restartVisineBodyIgra);
    window.addEventListener('resize', restartVisineBodyIgra);
    postaviJezik(trenutniJezik);

    document.addEventListener("click", function (e) {
        const celija = e.target.closest(".sve_celije");
        if (!celija)
            return;
        if (brojBacanja === 0 || !kockeDugmiciVidljivost)
            return;

        if (celija.style.backgroundColor === "red")
            celija.style.backgroundColor = "white";

        const najava = [
            "celijaDiv1-4",
            "celijaDiv2-84",
            "celijaDiv2-94",
            "celijaDiv3-4"
        ]
        if (celija.textContent === "")
            if (najava.some(cls => celija.classList.contains(cls)))
                if (zvuk)
                    zvuk.play().catch(err => console.log('Greška pri puštanju zvuka:', err));

        const rucna = [
            "celijaDiv1-5",
            "celijaDiv2-85",
            "celijaDiv2-95",
            "celijaDiv3-5"
        ]
        if (rucna.some(cls => celija.classList.contains(cls)) && Number(brojBacanja) !== 1)
            return;

        const red = celija.parentNode;
        if (!mozeInterakcija(red, celija))
            return;

        const redID = red.id;
        const kolona = celija.cellIndex;

        poslednjiPotez = [{
            kocke: [...kocke],
            zadrzi: [...zadrzi],
            brojBacanja,
            redID,
            kolona,
            prethodnaVrednost: celija.textContent
        }];

        localStorage.setItem("poslednjiPotez", JSON.stringify(poslednjiPotez));
        mozeUndo = true;

        const zbir = izracunajPoRedu(celija);
        celija.textContent = zbir;

        osveziRezultate(tabela);
        sacuvajCeliju(redID, kolona, zbir);
        resetBacanja();
    });
});

function div1(tabela) {
    for (let i = 1; i <= 6; i++) {
        const novRed = tabela.insertRow();
        novRed.id = `red-` + i;
        for (let j = 0; j < broj - 1; j++) {
            const novaCelija = novRed.insertCell();
            manipulacijaKolonama(i, j, novaCelija);
            novaCelija.classList.add(`celijaDiv1-` + j, 'sve_celije');
        }
        const celijaKocke = novRed.insertCell();
        celijaKocke.classList.add('celija_kocke');
    }
    dodajOkvir(tabela, 1, 1, 'borderTop');
    dodajOkvir(tabela, 1, 8, 'borderTop');
}

function napraviKockicu(broj) {
    const kockica = document.createElement("div");
    kockica.className = "kockica";

    if (broj === '?') {
        const znak = document.createElement("div");
        znak.className = "znak";
        znak.textContent = "?";
        kockica.appendChild(znak);
        return kockica;
    }

    const pozicije = {
        1: [5],
        2: [1, 9],
        3: [1, 5, 9],
        4: [1, 3, 7, 9],
        5: [1, 3, 5, 7, 9],
        6: [1, 3, 4, 6, 7, 9]
    };

    for (let i = 1; i <= 9; i++) {
        let polje = document.createElement("div");

        if (pozicije[broj].includes(i)) {
            let tacka = document.createElement("div");
            tacka.className = "tacka";
            polje.appendChild(tacka);
        }
        kockica.appendChild(polje);
    }
    return kockica;
}

function prikaziKocke() {
    for (let i = 1; i <= 6; i++) {
        const red = document.getElementById(`red-${i}`);
        if (!red)
            continue;

        const celija = red.cells[red.cells.length - 1];
        if (!celija)
            continue;

        const kockica = napraviKockicu(kocke[i - 1]);

        if (zadrzi[i - 1])
            kockica.classList.add("zadrzi");

        kockica.onclick = () => {
            if (brojBacanja < 1)
                return;

            const trenutnoZadrzane = zadrzi.filter(h => h).length;
            if (!zadrzi[i - 1] && trenutnoZadrzane >= 5)
                return;

            zadrzi[i - 1] = !zadrzi[i - 1];

            sacuvajKockeDugmice();
            prikaziKocke();
        };
        celija.replaceChildren(kockica);
    }
}

function azurirajKockiceUI() {
    const dugme = document.getElementById("kockice");
    if (!dugme)
        return;

    dugme.setAttribute(
        "data-i18n",
        kockeDugmiciVidljivost
            ? "ui.onemoguci_kockice"
            : "ui.omoguci_kockice"
    );
    postaviJezik(trenutniJezik);
}

function suma1(tabela) {
    let suma = manipulacijaSumama(tabela, "suma-1");
    for (let i = 1; i < broj; i++) {
        const novaCelija = tabela.querySelectorAll(`.celijaDiv1-` + i);
        const {rezultat, imaUnosa} = daLiImaUnosa(novaCelija);
        if (!imaUnosa)
            suma.cells[i].textContent = '';
        else if (rezultat >= 60)
            suma.cells[i].textContent = (rezultat + 30).toString();
        else
            suma.cells[i].textContent = rezultat.toString();
    }
}

function div2(tabela) {
    for (let i = 8; i <= 9; i++) {
        const novRed = tabela.insertRow();
        novRed.id = `red-` + i;
        for (let j = 0; j < broj - 1; j++) {
            const novaCelija = novRed.insertCell();
            manipulacijaKolonama(i, j, novaCelija);
            novaCelija.classList.add(`celijaDiv2-` + i + j, 'sve_celije');
        }
        if (i === 8) {
            const celijaBacanja = novRed.insertCell();
            celijaBacanja.classList.add('celija_bacanja');
            celijaBacanja.rowSpan = 2;

            const dugme = document.createElement("button");
            dugme.textContent = "0";

            dugme.onclick = () => {
                baciKocke(dugme);
            };
            celijaBacanja.appendChild(dugme);
        }
    }
    dodajOkvir(tabela, 8, 7, 'borderMAX');
    dodajOkvir(tabela, 9, 7, 'borderMIN');
}

function baciKocke(dugme) {
    if (partijaJeZavrsena())
        return;

    poslednjiPotez = [];
    localStorage.removeItem("poslednjiPotez");
    mozeUndo = false;

    if (bacanjeUToku)
        return;

    if (brojBacanja >= 3)
        return;

    if (ostaloSamoPoljeURucnojKoloni() && brojBacanja >= 1)
        return;

    bacanjeUToku = true;

    dugme.textContent = (brojBacanja + 1).toString();

    const sveKocke = document.querySelectorAll(".kockica");
    for (let i = 0; i < 6; i++) {
        if (!zadrzi[i])
            sveKocke[i].classList.add("spin");
    }

    let interval = setInterval(() => {
        for (let i = 0; i < 6; i++)
            if (!zadrzi[i])
                kocke[i] = Math.floor(Math.random() * 6) + 1;
        prikaziKocke();
    }, 60);

    setTimeout(() => {
        clearInterval(interval);
        sveKocke.forEach(el => el.classList.remove("spin"));
        for (let i = 0; i < 6; i++)
            if (!zadrzi[i])
                kocke[i] = randomBroj();

        prikaziKocke();
        brojBacanja++;
        bacanjeUToku = false;
        sacuvajKockeDugmice();
        azurirajBacanjeUI();
    }, 350);
}

function resetBacanja() {
    brojBacanja = 0;
    zadrzi = [false, false, false, false, false, false];
    kocke = ['?', '?', '?', '?', '?', '?'];
    sacuvajKockeDugmice();
    azurirajBacanjeUI();
    prikaziKocke();
}

function azurirajBacanjeUI() {
    const dugme = document.querySelector(".celija_bacanja button");
    if (!dugme)
        return;

    dugme.textContent = Math.min(brojBacanja, 3).toString();
}

function randomBroj() {
    const niz = new Uint8Array(1);
    let vrednost;
    do {
        crypto.getRandomValues(niz);
        vrednost = niz[0];
    } while (vrednost >= 252);
    return (vrednost % 6) + 1;
}

function suma2(tabela) {
    let suma = manipulacijaSumama(tabela, "suma-2");
    const prviRed = tabela.querySelector("#red-1");
    for (let i = 1; i < broj; i++) {
        let celijaMAX = tabela.querySelector(`.celijaDiv2-8` + i);
        let celijaMIN = tabela.querySelector(`.celijaDiv2-9` + i);
        let celijaPrviRed = prviRed ? prviRed.cells[i] : null;
        let rezultat;
        if (celijaMAX && celijaMIN && celijaPrviRed) {
            let brojMAX = parseInt(celijaMAX.textContent, 10);
            let brojMIN = parseInt(celijaMIN.textContent, 10);
            let brojPrvogReda = parseInt(celijaPrviRed.textContent, 10);
            if (!isNaN(brojMIN) && !isNaN(brojMAX) && !isNaN(brojPrvogReda)) {
                rezultat = (brojMAX - brojMIN) * brojPrvogReda;
                suma.cells[i].textContent = rezultat;
            } else
                suma.cells[i].textContent = '';
        } else
            suma.cells[i].textContent = '';
    }
}

function div3(tabela) {
    for (let i = 11; i <= 15; i++) {
        const novRed = tabela.insertRow();
        novRed.id = `red-` + i;
        for (let j = 0; j < broj - 1; j++) {
            const novaCelija = novRed.insertCell();
            manipulacijaKolonama(i, j, novaCelija);
            novaCelija.classList.add(`celijaDiv3-` + j, 'sve_celije');
        }
        if (i === 11) {
            const celijaVracanja = novRed.insertCell();
            celijaVracanja.classList.add('celija_vracanja');

            const dugme = document.createElement("button");
            const slika = document.createElement("img");
            slika.src = "static/images/cells/back.png";
            dugme.appendChild(slika);
            dugme.onclick = () => {
                if (!mozeUndo)
                    return;
                if (poslednjiPotez.length === 0)
                    return;

                const poslednji = poslednjiPotez[0];
                const tabela = document.querySelector("table");
                const red = tabela.rows[poslednji.redID];
                const celija = red?.cells[poslednji.kolona];
                if (celija)
                    celija.textContent = "";

                kocke = poslednji.kocke;
                zadrzi = poslednji.zadrzi;
                brojBacanja = poslednji.brojBacanja;

                sacuvajKockeDugmice();
                sacuvajCeliju(poslednji.redID, poslednji.kolona, "");
                poslednjiPotez = [];
                localStorage.removeItem("poslednjiPotez");
                mozeUndo = false;
                osveziRezultate(tabela);
                azurirajBacanjeUI();
                prikaziKocke();
            };
            celijaVracanja.appendChild(dugme);
        }
    }
    dodajOkvir(tabela, 15, 3, 'borderBottom');
    dodajOkvir(tabela, 15, 8, 'borderBottom');
}

function sakrijKockeDugmice() {
    document.querySelectorAll(".celija_kocke, .celija_bacanja, .celija_vracanja")
        .forEach(el => el.classList.add("hidden"));
}
function prikaziKockeDugmice() {
    document.querySelectorAll(".celija_kocke, .celija_bacanja, .celija_vracanja")
        .forEach(el => el.classList.remove("hidden"));
    prikaziKocke();
}

function suma3(tabela) {
    let suma = manipulacijaSumama(tabela, "suma-3");
    for (let i = 1; i < broj; i++) {
        const novaCelija = tabela.querySelectorAll(`.celijaDiv3-` + i);
        const {rezultat, imaUnosa} = daLiImaUnosa(novaCelija);
        suma.cells[i].textContent = (imaUnosa) ? rezultat : '';
    }
}

function m(tabela) {
    for (let i = 1; i <= 15; i++) {
        const novRed = tabela.rows[i];
        let max = null, min = 30;
        let promena = false;
        if (i <= 6 || i === 8 || i >= 10) {
            for (let j = 1; j < broj - 2; j++) {
                let trenutniBroj = parseInt(novRed.cells[j].textContent, 10);
                if (!isNaN(trenutniBroj) && (max === null || trenutniBroj > max)) {
                    max = trenutniBroj;
                    promena = true;
                }
            }
            novRed.cells[broj - 2].textContent = promena ? max : '';
        } else if (i === 9) {
            for (let j = 1; j < broj - 2; j++) {
                let trenutniBroj = parseInt(novRed.cells[j].textContent, 10);
                if (!isNaN(trenutniBroj) && trenutniBroj < min && trenutniBroj !== 0) {
                    min = trenutniBroj;
                    promena = true;
                }
            }
            novRed.cells[broj - 2].textContent = promena ? min : '';
        }
    }
}

function suma4(tabela) {
    let red = [7, 10, 16];
    let suma = [];
    let zbir = [];
    let vrednost = [];
    let ukupno = 0;

    for (let i = 0; i < 3; i++) {
        suma[i] = tabela.rows[red[i]];
        zbir[i] = 0;
        vrednost[i] = 0;
    }

    for (let i = 1; i < broj - 1; i++) {
        for (let j = 0; j < 3; j++) {
            vrednost[j] = parseInt(suma[j].cells[i].textContent, 10);
            if (!isNaN(vrednost[j]))
                zbir[j] += vrednost[j];
        }
    }

    let unosZaKonacno = false;
    for (let i = 0; i < 3; i++) {
        let imaUnosa = false;

        for (let j = 1; j < broj - 1; j++) {
            if (suma[i].cells[j].textContent.trim() !== "") {
                imaUnosa = true;
                unosZaKonacno = true;
                break;
            }
        }
        suma[i].cells[broj - 1].textContent = imaUnosa ? zbir[i] : '';
        if (imaUnosa)
            ukupno += zbir[i];
    }
    const red16 = tabela.querySelector("#red-16");
    const poeni = red16.querySelector("#poeni");
    poeni.textContent = unosZaKonacno ? ukupno : '';
    ukupnoPoena = ukupno;
}

function dodavanjeBrojeva(e) {

    const celija = e.target;
    const red = celija.parentNode;

    if (!proveraPravilaRedosleda(red, celija))
        return false;
    if (kockeDugmiciVidljivost)
        return;

    celija.setAttribute("staraVrednost", celija.textContent);
    celija.setAttribute("contenteditable", kockeDugmiciVidljivost ? "false" : "true");
    celija.setAttribute("inputmode", "numeric");
    celija.setAttribute("pattern", "[0-9]*");
    celija.focus();

    const opseg = document.createRange();
    opseg.selectNodeContents(celija);
    const selektovanDeo = window.getSelection();
    selektovanDeo.removeAllRanges();
    selektovanDeo.addRange(opseg);

    proveraUnosa(celija);

    if (!celija.hasAttribute("blurOsluskivac")) {
        celija.setAttribute("blurOsluskivac", "true");
        celija.addEventListener("blur", function () {
            const unos = parseInt(celija.textContent, 10);
            const red = celija.parentNode;
            const tabela = red.closest("table");
            const staraVrednost = celija.getAttribute("staraVrednost");

            if (staraVrednost !== "" && celija.textContent !== staraVrednost) {
                potvrdi((zameni) => {
                    if (!zameni) {
                        celija.textContent = staraVrednost;
                        celija.setAttribute("contenteditable", "false");
                        return;
                    }
                    obradaUnosa(celija, unos, red, staraVrednost, tabela);
                }, "Zameni broj", "Odustani", "yellow");
            } else if (celija.textContent === "" || celija.textContent !== staraVrednost)
                obradaUnosa(celija, unos, red, staraVrednost, tabela);
        });
    }
}

function proveraPravilaRedosleda(red, celija) {
    const kolona = celija.cellIndex;
    const tabela = red.closest("table");
    const redID = parseInt(red.id.split("-")[1]);

    if (kolona === 1)
        return redID === 1 || pravilaRedosleda(tabela, kolona, 1, redID - 1);

    if (kolona === 3)
        return redID === 15 || pravilaRedosleda(tabela, kolona, 15, redID + 1);

    if (kolona === 7) {
        if (redID <= 8) return redID === 8 || pravilaRedosleda(tabela, kolona, redID + 1, 8);
        if (redID >= 9) return redID === 9 || pravilaRedosleda(tabela, kolona, 9, redID - 1);
        return false;
    }

    if (kolona === 8) {
        if (redID >= 1 && redID <= 8) return redID === 1 || pravilaRedosleda(tabela, kolona, 1, redID - 1);
        if (redID >= 9 && redID <= 15) return redID === 15 || pravilaRedosleda(tabela, kolona, 15, redID + 1);
        return false;
    }

    if (kolona === 9) {
        for (let j = 1; j < kolona; j++)
            if (!pravilaRedosleda(tabela, j, 1, tabela.rows.length - 2))
                return false;
        return redID === 1 || pravilaRedosleda(tabela, kolona, 1, redID - 1);
    }
    return true;
}

function pravilaRedosleda(tabela, kolona, pocetak, kraj) {
    const korak = pocetak < kraj ? 1 : -1;
    for (let i = pocetak; korak > 0 ? i <= kraj : i >= kraj; i += korak) {
        if (i === 7 || i === 10 || i === 16)
            continue;
        if (tabela.rows[i].cells[kolona].textContent.trim() === "")
            return false;
    }
    return true;
}

function proveraUnosa(celija) {
    celija.addEventListener('keydown', function (e) {
        const kljuc = e.key;
        if (!/^\d$/.test(kljuc) && kljuc !== 'Backspace' && kljuc !== 'Delete')
            e.preventDefault();
    });

    celija.addEventListener('beforeinput', function (e) {
        if (e.data && /\D/.test(e.data)) {
            e.preventDefault();
        }
    });

    celija.addEventListener('input', function () {
        let novi = celija.textContent.replace(/\D+/g, '');
        if (novi !== celija.textContent) {
            celija.textContent = novi;
            const selekcija = window.getSelection();
            const opseg = document.createRange();
            opseg.selectNodeContents(celija);
            opseg.collapse(false);
            selekcija.removeAllRanges();
            selekcija.addRange(opseg);
        }


        let broj = celija.textContent.trim();
        if (broj.startsWith('0') && broj.length > 1)
            celija.textContent = '';
        else if (broj !== '' && parseInt(broj, 10) > 80)
            celija.textContent = '';
    });
}

function obradaUnosa(celija, unos, red, staraVrednost, tabela) {
    if (unos === "" || isNaN(unos)) {
        celija.style.backgroundColor = "white";
        celija.setAttribute("contenteditable", "false");
        sacuvajCeliju(red.id, celija.cellIndex, "", "white");

        while (celija.firstChild)
            celija.removeChild(celija.firstChild);

        if (staraVrednost !== "")
            osveziRezultate(tabela);

        return;
    }

    if (((red.id === "red-1" && (![0, 1, 2, 3, 4, 5].includes(unos))) ||
        (red.id === "red-2" && (![0, 2, 4, 6, 8, 10].includes(unos))) ||
        (red.id === "red-3" && (![0, 3, 6, 9, 12, 15].includes(unos))) ||
        (red.id === "red-4" && (![0, 4, 8, 12, 16, 20].includes(unos))) ||
        (red.id === "red-5" && (![0, 5, 10, 15, 20, 25].includes(unos))) ||
        (red.id === "red-6" && (![0, 6, 12, 18, 24, 30].includes(unos))) ||
        (red.id === "red-8" || red.id === "red-9") && (!(unos >= 5 && unos <= 30) || isNaN(unos)) ||
        (red.id === "red-11" && (![0, 46, 56, 66].includes(unos))) ||
        (red.id === "red-12" && (![0, 33, 36, 39, 42, 45, 48].includes(unos))) ||
        (red.id === "red-13" && (((unos !== 0 && unos < 37) || unos > 58 || unos === 40 || unos === 55 || isNaN(unos)))) ||
        (red.id === "red-14" && (![0, 44, 48, 52, 56, 60, 64].includes(unos))) ||
        (red.id === "red-15" && (![0, 55, 60, 65, 70, 75, 80].includes(unos))))) {

        celija.style.backgroundColor = "red";
        sacuvajCeliju(red.id, celija.cellIndex, "", "red");

        while (celija.firstChild)
            celija.removeChild(celija.firstChild);

    } else {
        if (celija.cellIndex === 4 && celija.textContent !== staraVrednost)
            if (zvuk)
                zvuk.play().catch(err => console.log('Greška pri puštanju zvuka:', err));

        celija.style.backgroundColor = "white";
        sacuvajCeliju(red.id, celija.cellIndex, unos, "white");
        celija.textContent = unos;
    }
    celija.setAttribute("contenteditable", "false");
    osveziRezultate(tabela);
}

function daLiImaUnosa(novaCelija) {
    let rezultat = 0;
    let imaUnosa = false;
    for (let j = 0; j < novaCelija.length; j++) {
        const unos = novaCelija[j].textContent.trim();
        if (unos !== "") {
            rezultat += parseInt(unos) || 0;
            imaUnosa = true;
        }
    }
    return {rezultat, imaUnosa};
}

function osveziRezultate(tabela) {
    m(tabela);
    suma1(tabela);
    suma2(tabela);
    suma3(tabela);
    suma4(tabela);
}

function dodajOkvir(tabela, redIndeks, kolonaIndeks, ivica) {
    const celija = tabela.rows[redIndeks].cells[kolonaIndeks];
    switch (ivica) {
        case 'borderTop':
            celija.style.boxShadow = 'inset 0 4px 0 0 black';
            break;
        case 'borderMAX':
            celija.style.boxShadow = 'inset 0 -2px 0 0 black';
            break;
        case 'borderMIN':
            celija.style.boxShadow = 'inset 0 2px 0 0 black';
            break;
        case 'borderBottom':
            celija.style.boxShadow = 'inset 0 -4px 0 0 black';
            break;
    }
}

function sacuvajCeliju(redID, kolona, vrednost, boja) {
    let podaci = JSON.parse(localStorage.getItem("jambBaza")) || {};
    if (!podaci[redID]) {
        podaci[redID] = {};
    }
    podaci[redID][kolona] = {
        "v": vrednost
    }

    if (boja === "red")
        podaci[redID][kolona]["b"] = "red";

    localStorage.setItem("jambBaza", JSON.stringify(podaci));
}

function ucitajCelije(tabela) {
    const podaci = JSON.parse(localStorage.getItem("jambBaza")) || {};
    for (let redID in podaci) {
        const redElement = tabela.querySelector(`#${redID}`);
        if (redElement) {
            for (let kolona in podaci[redID]) {
                let celija = redElement.cells[kolona];
                if (celija) {
                    let podaciCelije = podaci[redID][kolona];
                    celija.textContent = (podaciCelije.v !== undefined && podaciCelije.v !== null) ? podaciCelije.v : "";
                    if (podaciCelije.b === "red")
                        celija.style.backgroundColor = "red";
                    else
                        celija.style.backgroundColor = "white";
                }
            }
        }
    }
}

function novaPartija() {
    potvrdi(function (obrisi) {
        if (!obrisi)
            return;

        if (partijaJeZavrsena())
            sacuvajPartiju();

        const jambBaza = localStorage.getItem("jambBaza");
        const jambStanje = localStorage.getItem("jambStanje");
        const potez = localStorage.getItem("poslednjiPotez");
        const partijaId = localStorage.getItem("partijaId");
        const lista = JSON.parse(localStorage.getItem("jambPartije")) || [];
        const partijaJeSacuvana = lista.some(p => p.id === partijaId);
        const vidljivostKockeDugmici = localStorage.getItem("kockeDugmiciVidljivost");
        const vidljivostJePromenjena = vidljivostKockeDugmici !== localStorage.getItem("prethodna_kockeDugmiciVidljivost");
        const ucitanaSacuvanaPartija = localStorage.getItem("ucitanaSacuvanaPartija") === "true";
        if (!partijaJeSacuvana && !ucitanaSacuvanaPartija && (jambBaza != null || vidljivostKockeDugmici === "1")) {
            if (jambBaza != null)
                localStorage.setItem("prethodna_jambBaza", jambBaza);
            else if (vidljivostJePromenjena)
                localStorage.setItem("prethodna_jambBaza", JSON.stringify([]));
            if (jambStanje != null)
                localStorage.setItem("prethodno_jambStanje", jambStanje);
            else
                localStorage.setItem("prethodno_jambStanje", JSON.stringify({
                    kocke: ['?', '?', '?', '?', '?', '?'],
                    zadrzi: [false, false, false, false, false, false],
                    brojBacanja: 0,
                    bacanjeUToku: false,
                    poslednjiPotez: [],
                    mozeUndo: false
                }));
            if (potez != null)
                localStorage.setItem("prethodni_poslednjiPotez", potez);
            if (partijaId != null)
                localStorage.setItem("prethodna_partijaId", partijaId);
            else
                localStorage.removeItem("prethodna_partijaId");
            if (vidljivostKockeDugmici != null)
                localStorage.setItem("prethodna_kockeDugmiciVidljivost", vidljivostKockeDugmici);
            else
                localStorage.removeItem("prethodna_kockeDugmiciVidljivost");
        }
        localStorage.removeItem("jambBaza");
        localStorage.removeItem("jambStanje");
        localStorage.removeItem("poslednjiPotez");
        localStorage.removeItem("partijaId");
        kocke = ['?', '?', '?', '?', '?', '?'];
        zadrzi = [false, false, false, false, false, false];
        brojBacanja = 0;
        bacanjeUToku = false;
        poslednjiPotez = [];
        mozeUndo = false;
        localStorage.setItem("partijaId", crypto.randomUUID());
        if (ucitanaSacuvanaPartija) {
            const prethodnaVidljivost = localStorage.getItem("prethodna_kockeDugmiciVidljivost");
            localStorage.setItem("kockeDugmiciVidljivost", prethodnaVidljivost);
            if (prethodnaVidljivost === "1")
                prikaziKockeDugmice();
            else
                sakrijKockeDugmice();
            localStorage.removeItem("ucitanaSacuvanaPartija");
            window.location.reload();
        }
        prikaziKocke();
        azurirajBacanjeUI();

        const tabela = document.querySelector("table");
        for (let i = 1; i < tabela.rows.length; i++) {
            for (let j = 1; j < tabela.rows[i].cells.length; j++) {
                if ( j >= 1 && j <= 10 || i === 7 || i === 10 || i === 16)
                    tabela.rows[i].cells[j].textContent = "";
                if (j >= 1 && j <= 9)
                    if ((i >= 1 && i <= 6) || (i >= 8 && i <= 9) || (i >= 11 && i <= 15))
                        tabela.rows[i].cells[j].style.backgroundColor = "white";
            }
        }

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistration().then(reg => {
                if (reg) {
                    reg.update().then(() => {
                        window.location.reload();
                    });
                }
            })
        }
    }, "Obriši sve", "Odustani", "red");
}

function potvrdi(odgovor, tekstDugmeta1, tekstDugmeta2, boja) {
    const pozadina_prozora = document.createElement("div");
    pozadina_prozora.id = "pozadina_prozora";
    const prozor = document.createElement("div");
    prozor.id = "prozor";

    const dugme1 = document.createElement("button");
    dugme1.id = "dugme1";
    dugme1.className = "dugme_tabela";
    //dugme1.textContent = tekstDugmeta1;
    if (tekstDugmeta1 === "Obriši sve")
        dugme1.dataset.i18n = "ui.obrisi_sve";
    else if (tekstDugmeta1 === "Zameni broj")
        dugme1.dataset.i18n = "ui.zameni_broj";
    else if (tekstDugmeta1 === "Prethodna partija")
        dugme1.dataset.i18n = "ui.prethodna_partija";
    else if (tekstDugmeta1 === "Učitaj partiju")
        dugme1.dataset.i18n = "ui.ucitaj_partiju";
    dugme1.style.backgroundColor = boja;

    const dugme2 = document.createElement("button");
    dugme2.id = "dugme2";
    dugme2.className = "dugme_tabela";
    //dugme2.textContent = tekstDugmeta2;
    if (tekstDugmeta2 === "Odustani")
        dugme2.dataset.i18n = "ui.odustani";
    dugme2.style.backgroundColor = "green";

    dugme1.onclick = () => {
        pozadina_prozora.remove();
        odgovor(true);
    };
    dugme2.onclick = () => {
        pozadina_prozora.remove();
        odgovor(false);
    };

    prozor.append(dugme1, dugme2);
    pozadina_prozora.appendChild(prozor);
    document.body.appendChild(pozadina_prozora)

    postaviJezik(trenutniJezik);
}

const boxPodesavanja = document.getElementById("box_podesavanja");
const dugmePravila = document.getElementById("pravila");
const dugmeJezici = document.getElementById("jezici");
const dugmeKontakt = document.getElementById("kontakt");
const dugmePregledSacuvanihPartija = document.getElementById("pregled_sacuvanih_partija");
const dugmeIzlaz = document.getElementById("izlaz");

const boxPravila = document.getElementById("box_pravila");
const boxObjasnjenje = document.getElementById("box_objasnjenje");
const h2Pravila = document.getElementById("h2_pravila");
const boxJezici = document.getElementById("box_jezici");
const boxKontakt = document.getElementById("box_kontakt");
const boxPregledSacuvanihPartija = document.getElementById("box_pregled_sacuvanih_partija");
const tekstKontakt = document.getElementById("tekst_kontakt");

if (dugmePravila) {
    dugmePravila.addEventListener("click", () => {
        centrirajSkrolPodesavanja();
        boxPodesavanja.classList.add("hidden");
        boxPravila.classList.remove("hidden");
        boxObjasnjenje.classList.remove("hidden");
        h2Pravila.classList.remove("hidden");
    });
}

if (dugmeJezici) {
    dugmeJezici.addEventListener("click", () => {
        centrirajSkrolPodesavanja();
        boxPodesavanja.classList.add("hidden");
        boxJezici.classList.remove("hidden");
    });
}

if (dugmeKontakt) {
    dugmeKontakt.addEventListener("click", () => {
        centrirajSkrolPodesavanja();
        boxPodesavanja.classList.add("hidden");
        boxKontakt.classList.remove("hidden");
    });
}

if (tekstKontakt) {
    tekstKontakt.placeholder = prevod[trenutniJezik].ui.poruka;
}

if (dugmePregledSacuvanihPartija) {
    dugmePregledSacuvanihPartija.addEventListener("click", () => {
        centrirajSkrolPodesavanja();
        boxPodesavanja.classList.add("hidden");
        boxPregledSacuvanihPartija.classList.remove("hidden");
        prikaziPartije();
    });
}

if (dugmeIzlaz) {
    dugmeIzlaz.addEventListener("click", () => {
        window.history.back();
    });
}

const duzmeZatvori = document.querySelectorAll(".zatvori");
duzmeZatvori.forEach(dugme => {
    dugme.addEventListener("click", () => {
        window.history.back();
    });
});

const dugmeNazadNaPodesavanja = document.querySelectorAll(".nazad_na_podesavanja");
dugmeNazadNaPodesavanja.forEach(dugme => {
    dugme.addEventListener("click", () => {
        boxPodesavanja.classList.remove("hidden");
        boxJezici.classList.add("hidden");
        boxPravila.classList.add("hidden");
        boxObjasnjenje.classList.add("hidden");
        h2Pravila.classList.add("hidden");
        boxKontakt.classList.add("hidden");
        boxPregledSacuvanihPartija.classList.add("hidden");
    });
});

document.querySelectorAll(".button_pravila").forEach(dugme => {
    dugme.addEventListener("click", () => {
        centrirajSkrolPodesavanja();
        const id = dugme.id;

        boxPravila.classList.add("hidden");
        boxObjasnjenje.textContent = "";

        const pravilo = prevod[trenutniJezik].pravila[id];
        if (!pravilo)
            return;

        const naslov = document.createElement("h2");
        naslov.textContent = pravilo.title;
        boxObjasnjenje.appendChild(naslov);
        const p = document.createElement("p");
        p.className = "opis";
        pravilo.box.forEach(item => {
            if (typeof item === "string") {
                const span = document.createElement("span");
                span.className = item.startsWith("\u00A0") ? "uvuceno" : "stavka";
                span.textContent = item.trim();
                p.appendChild(span);
                p.appendChild(document.createElement("br"));
            }
            else if (item.link) {
                const span = document.createElement("span");
                span.className = "linkovana_slika";
                span.textContent = item.link.text;

                span.addEventListener("click", () => {
                   const preklapanje = document.getElementById("id_fullscreen_preklapanje");
                   const slika = document.getElementById("fullscreen_slika");
                   slika.src = item.link.href;
                   preklapanje.style.display = "flex";
                });
                p.appendChild(span);
                p.appendChild(document.createElement("br"));
            }
        });
        boxObjasnjenje.appendChild(p);
        const dugmeNazad = document.createElement("button");
        //dugmeNazad.textContent = "Nazad";
        dugmeNazad.dataset.i18n = "ui.nazad";
        dugmeNazad.className = "button_pravila button_nazad";
        dugmeNazad.addEventListener("click", () => {
            boxObjasnjenje.textContent = "";
            boxPravila.classList.remove("hidden");
            h2Pravila.classList.remove("hidden");
            boxPravila.scrollIntoView({behavior: "smooth"});
        });
        boxObjasnjenje.appendChild(dugmeNazad);
        postaviJezik(trenutniJezik);

        const duzmeZatvori = document.createElement("button");
        duzmeZatvori.textContent = "x";
        duzmeZatvori.className = "zatvori";
        boxObjasnjenje.appendChild(duzmeZatvori);
        duzmeZatvori.addEventListener("click", () => {
            window.history.back();
        })
    });
});

function postaviJezik(jezik) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const kljuc = element.dataset.i18n.split(".");
        let tekst = prevod[jezik];
        kljuc.forEach(k => {
            tekst = tekst[k];
        });
        element.textContent = tekst;
    });
}
document.querySelectorAll(".button_jezici").forEach(dugme => {
    dugme.addEventListener("click", () => {
        let jezik = dugme.id;

        if (jezik) {
            trenutniJezik = jezik;
            localStorage.setItem("jezik", jezik);
            sessionStorage.setItem("refres", "true");

            document.querySelectorAll(".button_jezici").forEach(btn => {
               btn.classList.remove("active");
            });
            dugme.classList.add("active");
            postaviJezik(trenutniJezik);

            window.history.back();
        }
    });
});

function osveziJednom() {
    if (!sessionStorage.getItem("osvezen")) {
        sessionStorage.setItem("osvezen", "true");
        window.location.reload();
    }
}

window.addEventListener("pageshow", () => {
    if (sessionStorage.getItem("refres")) {
        sessionStorage.removeItem("refres");
        sessionStorage.removeItem("osvezen");
    }
    osveziJednom();
});

const dugmePosalji = document.getElementById("posalji");
if (dugmePosalji) {
    dugmePosalji.addEventListener("click", () => {
       const poruka = tekstKontakt.value.trim();
       if (poruka.length < 5)
           return;

       const email = ['yamb.contact','gmail.com'].join('@');
       const naslov = "YAMB";
       const sadrzaj = encodeURIComponent(poruka);

       window.location.href = `mailto:${email}?subject=${encodeURIComponent(naslov)}&body=${sadrzaj}`;
    });
}

document.getElementById("kockice")?.addEventListener("click", () => {
    const jambBaza = /** @type {any} */ (JSON.parse(localStorage.getItem("jambBaza") || "{}"));
    const imaPodataka = Object.values(jambBaza).some((red) =>
        Object.values(/** @type {any} */ (red)).some((polje) =>
            polje.v !== "" || polje.hasOwnProperty("b")
        )
    );

    if (imaPodataka) {
        prikaziPorukuKockice();
        return;
    }

    kockeDugmiciVidljivost = !kockeDugmiciVidljivost;

    if (kockeDugmiciVidljivost)
        prikaziKockeDugmice();
    else
        sakrijKockeDugmice();

    localStorage.setItem("kockeDugmiciVidljivost", kockeDugmiciVidljivost ? "1" : "0");
    sessionStorage.setItem("refres", "true");
    azurirajKockiceUI();
    window.history.back();
});

/** @type {HTMLElement} */
const modal = document.getElementById("poruka_kockice");
if (modal) {
    modal.addEventListener("click", () => {
        modal.classList.add("modal_sakriven");
    });
}
function prikaziPorukuKockice() {
    if (modal)
        modal.classList.remove("modal_sakriven");
}

function sacuvajKockeDugmice() {
    const stanje = {
        kocke,
        zadrzi,
        brojBacanja,
        bacanjeUToku
    };

    localStorage.setItem("jambStanje", JSON.stringify(stanje));
}

function ucitajKockeDugmice() {
    const podaci = localStorage.getItem("jambStanje");
    if (!podaci)
        return false;

    let stanje;
    try {
        stanje = JSON.parse(podaci);
    } catch (e) {
        return false;
    }

    kocke = stanje.kocke || ['?', '?', '?', '?', '?', '?'];
    zadrzi = stanje.zadrzi || [false, false, false, false, false, false];
    brojBacanja = stanje.brojBacanja || 0;
    bacanjeUToku = stanje.bacanjeUToku || false;

    azurirajBacanjeUI();
    return true;
}

function izracunajPoRedu(celija) {
    const red = celija.closest("tr");
    const id = red.id;
    const k = kocke.map(Number);

    if (id === "red-1") return zbirBroja(k, 1);
    if (id === "red-2") return zbirBroja(k, 2);
    if (id === "red-3") return zbirBroja(k, 3);
    if (id === "red-4") return zbirBroja(k, 4);
    if (id === "red-5") return zbirBroja(k, 5);
    if (id === "red-6") return zbirBroja(k, 6);
    if (id === "red-8") return max(k);
    if (id === "red-9") return min(k);
    if (id === "red-11") return kenta(k);
    if (id === "red-12") return triling(k);
    if (id === "red-13") return ful(k);
    if (id === "red-14") return poker(k);
    if (id === "red-15") return jamb(k);

    return 0;
}

function zbirBroja(k, broj) {
    let brojac = 0;
    return k.reduce((sum, v) => {
        if (v === broj && brojac < 5) {
            brojac++;
            return sum + v;
        }
        return sum;
    }, 0);
}

function max(k) {
    return k.slice().sort((a, b) => b - a).slice(0, 5).reduce((a, b) => a + b, 0);
}

function min(k) {
    return k.slice().sort((a, b) => a - b).slice(0, 5).reduce((a, b) => a + b, 0);
}

function kenta(k) {
    const jedinstven = [...new Set(k)].sort((a, b) => a - b);
    const k1 = [1,2,3,4,5].every(x => jedinstven.includes(x));
    const k2 = [2,3,4,5,6].every(x => jedinstven.includes(x));

    if (!(k1 || k2))
        return 0;

    if (brojBacanja === 1)
        return 66;
    if (brojBacanja === 2)
        return 56;
    if (brojBacanja === 3)
        return 46;

    return 0;
}

function triling(k) {
    let map = {};
    k.forEach(v => map[v] = (map[v] || 0) + 1);

    let maxBroj = 0;

    for (let broj in map)
        if (map[broj] >= 3)
            maxBroj = Math.max(maxBroj, Number(broj));

    if (maxBroj === 0)
        return 0;

    return maxBroj * 3 + 30;
}

function ful(k) {
    let map = {};
    k.forEach(v => map[v] = (map[v] || 0) + 1);

    let unosi = Object.entries(map)
        .map(([vrednost, broj]) => [Number(vrednost), broj])
        .sort((a, b) => {
            if (b[1] !== a[1])
                return b[1] - a[1];
            return b[0] - a[0];
        });

    let triling = null;
    let par = null;

    for (let [vrednost, broj] of unosi) {
        if (triling === null && broj >= 3) {
            triling = vrednost;
            continue;
        }
        if (par === null && broj >= 2) {
            par = vrednost;
        }
    }

    if (triling === null || par === null)
        return 0;

    return (triling * 3 + par * 2) + 30;
}
function poker(k) {
    let map = {};
    k.forEach(v => map[v] = (map[v] || 0) + 1);

    for (let broj in map) {
        if (map[broj] >= 4) {
            const poker = Number(broj) * 4;
            return poker + 40;
        }
    }

    return 0;
}

function jamb(k) {
    let map = {};
    k.forEach(v => map[v] = (map[v] || 0) + 1);

    for (let broj in map) {
        if (map[broj] >= 5) {
            const jamb = Number(broj) * 5;
            return jamb + 50;
        }
    }

    return 0;
}

function mozeInterakcija(red, celija) {
    return !(bacanjeUToku || celija.textContent !== "" || !proveraPravilaRedosleda(red, celija))
}

const dugmePrethodnaPartija = document.getElementById("prethodna_partija");
if (dugmePrethodnaPartija) {
    dugmePrethodnaPartija.addEventListener("click", () => {
        potvrdi(function (prethodna) {
            if (!prethodna)
                return;

            const prethodnaBaza = localStorage.getItem("prethodna_jambBaza");
            const prethodnoStanje = localStorage.getItem("prethodno_jambStanje");
            const prethodniPoslednjiPotez = localStorage.getItem("prethodni_poslednjiPotez");
            const prethodnaPartijaId = localStorage.getItem("prethodna_partijaId");
            const prethodnaKockeDugmiciVidljivost = localStorage.getItem("prethodna_kockeDugmiciVidljivost");

            if (prethodnaBaza == null || prethodnoStanje == null)
                return;

            const trenutnaBaza = localStorage.getItem("jambBaza");
            const trenutnoStanje = localStorage.getItem("jambStanje");
            const trenutniPoslednjiPotez = localStorage.getItem("poslednjiPotez");
            const trenutnaPartijaId = localStorage.getItem("partijaId");
            const lista = JSON.parse(localStorage.getItem("jambPartije")) || [];
            const partijaJeSacuvana = lista.some(p => p.id === trenutnaPartijaId);
            const trenutnaKockeDugmiciVidljivost = localStorage.getItem("kockeDugmiciVidljivost");
            const vidljivostJePromenjena = trenutnaKockeDugmiciVidljivost !== prethodnaKockeDugmiciVidljivost;

            if (lista.some(p => p.id === prethodnaPartijaId))
                return;
            if (!partijaJeSacuvana && localStorage.getItem("ucitanaSacuvanaPartija") !== "true" && (trenutnaBaza != null || trenutnaKockeDugmiciVidljivost === "1")) {
                if (trenutnaBaza != null)
                    localStorage.setItem("prethodna_jambBaza", trenutnaBaza);
                else if (vidljivostJePromenjena)
                    localStorage.setItem("prethodna_jambBaza", JSON.stringify([]));
                if (trenutnoStanje != null)
                    localStorage.setItem("prethodno_jambStanje", trenutnoStanje);
                if (trenutniPoslednjiPotez != null)
                    localStorage.setItem("prethodni_poslednjiPotez", trenutniPoslednjiPotez);
                else
                    localStorage.removeItem("prethodni_poslednjiPotez");
                if (trenutnaPartijaId != null)
                    localStorage.setItem("prethodna_partijaId", trenutnaPartijaId);
                else
                    localStorage.removeItem("prethodna_partijaId");
                if (trenutnaKockeDugmiciVidljivost != null)
                    localStorage.setItem("prethodna_kockeDugmiciVidljivost", trenutnaKockeDugmiciVidljivost);
            }
            localStorage.setItem("jambBaza", prethodnaBaza);
            localStorage.setItem("jambStanje", prethodnoStanje);
            if (prethodniPoslednjiPotez != null)
                localStorage.setItem("poslednjiPotez", prethodniPoslednjiPotez);
            else
                localStorage.removeItem("poslednjiPotez");
            if (prethodnaPartijaId != null)
                localStorage.setItem("partijaId", prethodnaPartijaId);
            else
                localStorage.removeItem("partijaId");
            if (prethodnaKockeDugmiciVidljivost != null)
                localStorage.setItem("kockeDugmiciVidljivost", prethodnaKockeDugmiciVidljivost);
            else
                localStorage.removeItem("kockeDugmiciVidljivost");

            sessionStorage.setItem("refres", "true");
            window.history.back();
        }, "Prethodna partija", "Odustani", "yellow");
    });
}

function partijaJeZavrsena() {
    const celije = document.querySelectorAll(".sve_celije");
    if (!celije.length)
        return false;

    for (const celija of celije)
        if (celija.textContent.trim() === "")
            return false;

    return true;
}

function ostaloSamoPoljeURucnojKoloni() {
    const rucna = [
        "celijaDiv1-5",
        "celijaDiv2-85",
        "celijaDiv2-95",
        "celijaDiv3-5"
    ];

    const o = [
        "celijaDiv1-9",
        "celijaDiv2-89",
        "celijaDiv2-99",
        "celijaDiv3-9"
    ];

    const sveCelije = [...document.querySelectorAll(".sve_celije")];
    const postojiPraznoPoljeURucnojKoloni = sveCelije.some(celija =>
        rucna.some(cls => celija.classList.contains(cls)) && celija.textContent.trim() === ""
    );

    if (!postojiPraznoPoljeURucnojKoloni)
        return false;

    return sveCelije.every(celija => {
        if (rucna.some(cls => celija.classList.contains(cls)))
            return true;
        if (o.some(cls => celija.classList.contains(cls)))
            return true;
        return celija.textContent.trim() !== "";
    });
}

function sacuvajPartiju() {
    let lista = JSON.parse(localStorage.getItem("jambPartije")) || [];

    let partijaId = localStorage.getItem("partijaId");
    if (!partijaId) {
        partijaId = crypto.randomUUID();
        localStorage.setItem("partijaId", partijaId);
    }
    if (lista.some(p => p.id === partijaId))
        return;

    const slika = localStorage.getItem("kockeDugmiciVidljivost") === "1" ? "static/images/previousGame/die.png" : "static/images/previousGame/hand.png";

    lista.push({
        id: partijaId,
        datum: Date.now(),
        poeni: ukupnoPoena,
        polja: localStorage.getItem("jambBaza"),
        slika: slika
    });

    if (lista.length > 100)
        lista.shift();

    localStorage.setItem("jambPartije", JSON.stringify(lista));
}

function prikaziPartije() {
    const div = document.getElementById("lista_partija");
    const lista = JSON.parse(localStorage.getItem("jambPartije")) || [];

    while (div.firstChild)
    div.removeChild(div.firstChild);

    const zaglavlja = [
        { naziv: "datum", kljuc: "datum" },
        { naziv: "vreme", kljuc: "vreme" },
        { naziv: "poeni", kljuc: "poeni" },
        { naziv: "", kljuc: "slika" }
    ];

    zaglavlja.forEach(z => {
       const element = document.createElement("div");
       if (z.naziv)
           element.textContent = prevod[trenutniJezik].ui[z.naziv];
       else
           element.textContent = " ";
       element.addEventListener("click", () => {
           if (sortiranjePrikaza.kolona === z.kljuc)
               sortiranjePrikaza.smer = sortiranjePrikaza.smer === "rastuce" ? "opadajuce" : "rastuce";
           else {
               sortiranjePrikaza.kolona = z.kljuc;
               sortiranjePrikaza.smer = "opadajuce";
           }
           prikaziPartije();
       });
       element.classList.add("zaglavlje_liste_rezultata");
       div.appendChild(element);
    });

    lista.sort((a, b) => {
        let rezultat = 0;
        const datumA = a.datum;
        const datumB = b.datum;
        const vremeA = new Date(a.datum).getHours() * 60 + new Date(a.datum).getMinutes();
        const vremeB = new Date(b.datum).getHours() * 60 + new Date(b.datum).getMinutes();
        const redosled = {
            "static/images/previousGame/die.png" : 0,
            "static/images/previousGame/hand.png" : 1
        };

       if (sortiranjePrikaza.kolona === "datum") {
           rezultat = datumA - datumB;
           if (rezultat === 0)
               rezultat = vremeA - vremeB;
       }
       else if (sortiranjePrikaza.kolona === "vreme") {
           rezultat = vremeA - vremeB;
           if (rezultat === 0)
               rezultat = datumA - datumB;
       }
       else if (sortiranjePrikaza.kolona === "poeni") {
           rezultat = a.poeni - b.poeni;
           if (rezultat === 0) {
               rezultat = datumA - datumB;
               if (rezultat === 0)
                   rezultat = vremeA - vremeB;
           }
       }
       else if (sortiranjePrikaza.kolona === "slika") {
           rezultat = (redosled[a.slika] ?? 999) - (redosled[b.slika] ?? 999);
           if (rezultat === 0) {
               rezultat = datumA - datumB;
               if (rezultat === 0)
                   rezultat = vremeA - vremeB;
           }
       }
       return sortiranjePrikaza.smer === "rastuce" ? rezultat : -rezultat;
    });

    lista.forEach(p => {
        const d = new Date(p.datum);

        const datum = d.toLocaleDateString(undefined, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });

        const vreme = d.toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit"
        });

        const elementDatum = napravi(datum);
        const elementVreme = napravi(vreme);
        const elementPoeni = napravi(p.poeni);
        const elementSlika = document.createElement("div");
        if (p.slika) {
            const slika = document.createElement("img");
            slika.src = p.slika;
            slika.width = 24;
            slika.height = 24;
            elementSlika.appendChild(slika);
        }

        elementDatum.addEventListener("click", () => ucitajPartiju(p.id));
        elementVreme.addEventListener("click", () => ucitajPartiju(p.id));
        elementPoeni.addEventListener("click", () => ucitajPartiju(p.id));
        if (p.slika)
            elementSlika.addEventListener("click", () => ucitajPartiju(p.id));

        div.appendChild(elementDatum);
        div.appendChild(elementVreme);
        div.appendChild(elementPoeni);
        div.appendChild(elementSlika);
    });

    function napravi(text, bold = false) {
        const element = document.createElement("div");
        element.textContent = text;
        if (bold)
            element.style.fontWeight = "bold";
        return element;
    }
}

function ucitajPartiju(id) {
    potvrdi(function (ucitaj) {
        if (!ucitaj)
            return;

        let lista = JSON.parse(localStorage.getItem("jambPartije")) || [];
        let partija = lista.find(p => p.id === id);

        if (!partija)
            return;

        const trenutnaPartijaId = localStorage.getItem("partijaId");
        const trenutnaPartijaJeSacuvana = lista.some(p => p.id === trenutnaPartijaId);

        if (!trenutnaPartijaJeSacuvana) {
            const trenutnaBaza = localStorage.getItem("jambBaza");
            const trenutnoStanje = localStorage.getItem("jambStanje");
            const trenutniPoslednjiPotez = localStorage.getItem("poslednjiPotez");

            if (trenutnaBaza != null)
                localStorage.setItem("prethodna_jambBaza", trenutnaBaza);
            if (trenutnoStanje != null)
                localStorage.setItem("prethodno_jambStanje", trenutnoStanje);
            if (trenutniPoslednjiPotez != null)
                localStorage.setItem("prethodni_poslednjiPotez", trenutniPoslednjiPotez);
            else
                localStorage.removeItem("prethodni_poslednjiPotez");
            if (trenutnaPartijaId != null)
                localStorage.setItem("prethodna_partijaId", trenutnaPartijaId);
            else
                localStorage.removeItem("prethodna_partijaId");
        }

        localStorage.setItem("ucitanaSacuvanaPartija", "true");
        localStorage.setItem("kockeDugmiciVidljivost", "0");
        localStorage.setItem("jambBaza", partija.polja);
        localStorage.setItem("partijaId", id);
        localStorage.removeItem("jambStanje");
        localStorage.removeItem("poslednjiPotez");
        sessionStorage.setItem("refres", "true");
        window.history.back();
    }, "Učitaj partiju", "Odustani", "yellow");
}

function centrirajSkrolPodesavanja() {
    const body = document.getElementById("body_podesavanja");
    if (!body)
        return;
    setTimeout(() => {
        body.scrollLeft = (body.scrollWidth - body.clientWidth) / 2;
    }, 0);
}

if ('serviceWorker' in navigator) {
    void navigator.serviceWorker.register('./sw.js');
}