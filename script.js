let trenutniJezik = localStorage.getItem("jezik") || "sr";
const zaglavlja = ["YAMB", "", "", "", "N", "R", "D", "", "", "O", "M", "S"];
const broj = zaglavlja.length;

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
        15: "JAMB"
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
    }

    let trenutniJezik = localStorage.getItem("jezik") || "sr";

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
    }
    dodajOkvir(tabela, 1, 1, 'borderTop');
    dodajOkvir(tabela, 1, 8, 'borderTop');
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
    }
    dodajOkvir(tabela, 8, 7, 'borderMAX');
    dodajOkvir(tabela, 9, 7, 'borderMIN');
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
    }
    dodajOkvir(tabela, 15, 3, 'borderBottom');
    dodajOkvir(tabela, 15, 8, 'borderBottom');
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
}

function dodavanjeBrojeva(event) {
    const celija = event.target;
    const red = celija.parentNode;
    if (!proveraPravilaRedosleda(red, celija))
        return;

    celija.setAttribute("staraVrednost", celija.textContent);
    celija.setAttribute("contenteditable", "true");
    celija.setAttribute("inputmode", "numeric");
    celija.setAttribute("pattern", "[0-9]*");
    celija.focus();

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
                }, "Zameni broj", "Vrati se", "yellow");
            } else
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
    celija.addEventListener('keydown', function (event) {
        const kljuc = event.key;
        if (!/^\d$/.test(kljuc) && kljuc !== 'Backspace' && kljuc !== 'Delete')
            event.preventDefault();
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
        sacuvajCeliju(red.id, celija.cellIndex, "");
        m(tabela);
        suma1(tabela);
        suma2(tabela);
        suma3(tabela);
        suma4(tabela);
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
        (red.id === "red-13" && (((unos !== 0 && unos < 37) || unos > 58 || isNaN(unos)))) ||
        (red.id === "red-14" && (![0, 44, 48, 52, 56, 60, 64].includes(unos))) ||
        (red.id === "red-15" && (![0, 55, 60, 65, 70, 75, 80].includes(unos))))) {
        celija.textContent = "";
        celija.style.backgroundColor = "red";
        sacuvajCeliju(red.id, celija.cellIndex, "");
    } else {
        if (celija.cellIndex === 4 && celija.textContent !== staraVrednost) {
            const zvuk = document.getElementById("zvuk_najave");
            if (zvuk)
                zvuk.play().catch(err => console.log('Greška pri puštanju zvuka:', err));
        }
        celija.style.backgroundColor = "white";
        sacuvajCeliju(red.id, celija.cellIndex, unos);
    }
    celija.setAttribute("contenteditable", "false");
    m(tabela);
    suma1(tabela);
    suma2(tabela);
    suma3(tabela);
    suma4(tabela);
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

function sacuvajCeliju(redID, kolona, vrednost) {
    let podaci = JSON.parse(localStorage.getItem("jambBaza")) || {};
    if (!podaci[redID]) {
        podaci[redID] = {};
    }
    podaci[redID][kolona] = vrednost;
    localStorage.setItem("jambBaza", JSON.stringify(podaci));
}

function ucitajCelije(tabela) {
    const podaci = JSON.parse(localStorage.getItem("jambBaza")) || {};
    for (let redID in podaci) {
        const redElement = tabela.querySelector(`#${redID}`);
        if (redElement) {
            for (let kolona in podaci[redID]) {
                if (redElement.cells[kolona])
                    redElement.cells[kolona].textContent = podaci[redID][kolona];
            }
        }
    }
}

function novaPartija() {
    potvrdi(function (obrisi) {
        if (!obrisi)
            return;
        localStorage.removeItem("jambBaza");
        const tabela = document.querySelector("table");
        for (let i = 1; i < tabela.rows.length; i++)
            for (let j = 1; j < tabela.rows[i].cells.length; j++)
                tabela.rows[i].cells[j].textContent = "";

        const zvuk = document.getElementById("zvuk_najave");
        zvuk.play().then(() => {
            zvuk.pause();
            zvuk.currentTime = 0;
        });

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistration().then(reg => {
                if (reg) {
                    reg.update().then(() => {
                        window.location.reload();
                    });
                }
            })
        }
    }, "Obriši sve", "Vrati se", "red");
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
    dugme1.style.backgroundColor = boja;

    const dugme2 = document.createElement("button");
    dugme2.id = "dugme2";
    dugme2.className = "dugme_tabela";
    //dugme2.textContent = tekstDugmeta2;
    if (tekstDugmeta2 === "Vrati se")
        dugme2.dataset.i18n = "ui.vrati_se";
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
const dugmeIzlaz = document.getElementById("izlaz");

const boxPravila = document.getElementById("box_pravila");
const boxObjasnjenje = document.getElementById("box_objasnjenje");
const h2Pravila = document.getElementById("h2_pravila");
const boxJezici = document.getElementById("box_jezici");

if (dugmePravila) {
    dugmePravila.addEventListener("click", () => {
        boxPodesavanja.classList.add("hidden");
        boxPravila.classList.remove("hidden");
        boxObjasnjenje.classList.remove("hidden");
        h2Pravila.classList.remove("hidden");
    });
}

if (dugmeJezici) {
    dugmeJezici.addEventListener("click", () => {
        boxPodesavanja.classList.add("hidden");
        boxJezici.classList.remove("hidden");
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
    });
});

document.querySelectorAll(".button_pravila").forEach(dugme => {
    dugme.addEventListener("click", () => {

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
        let jezik;
        switch (dugme.id) {
            case "srpski": jezik = "sr"; break;
            case "engleski": jezik = "en"; break;
            case "hrvatski": jezik = "hr"; break;
            case "bosanski": jezik = "bs"; break;
            case "makedonski": jezik = "mk"; break;
            case "slovenacki": jezik = "sl"; break;
            case "crnogorski": jezik = "me"; break;
        }
        if (jezik) {
            trenutniJezik = jezik;
            localStorage.setItem("jezik", jezik);
            postaviJezik(trenutniJezik);
            sessionStorage.setItem("promenjenJezik", "true");
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

window.addEventListener("pageshow", (event) => {
    if (sessionStorage.getItem("promenjenJezik")) {
        sessionStorage.removeItem("promenjenJezik");
        sessionStorage.removeItem("osvezen");
    }
    osveziJednom();
});

if ('serviceWorker' in navigator) {
    void navigator.serviceWorker.register('./sw.js');
}