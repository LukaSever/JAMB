const zaglavlja = ["Igra", "", "", "", "N", "R", "D", "", "", "O", "M","YAMB"];
const broj = zaglavlja.length;
function zaglavlje1(tabela) 
{
    const novRed = tabela.insertRow();
    novRed.id = `red-0`;
    for (let i = 0; i < broj; i++) 
    {
        const zaglavlje = document.createElement("th");
        zaglavlje.textContent = zaglavlja[i];
        novRed.appendChild(zaglavlje);
    }
}
function sume(celija)
{
    const sume = document.createElement("th");
    sume.textContent = "";
    celija.replaceWith(sume);
}
function podnozje(tabela)
{
    const novRed = tabela.insertRow();
    novRed.id = `red-16`;

    const ukupno = document.createElement("th");
    ukupno.id = "ukupno";
    ukupno.setAttribute("colspan", 9);
    ukupno.textContent = "Ukupno";
    novRed.appendChild(ukupno);

    const poeni = document.createElement("th");
    poeni.id = "poeni";
    poeni.setAttribute("colspan", 3);
    poeni.textContent = "";
    novRed.appendChild(poeni);
}
function slika(tabela)
{
    const vrednostSlike = [1,2,3,7,8];
    const verdnostSume = [7,10,16];
    for(let i = 0; i < 5; i++)
    {
        const slika = document.createElement("img");
        slika.src = "slike/slika"+(i+1)+".png";
        slika.alt = "D";
        tabela.rows[0].cells[vrednostSlike[i]].appendChild(slika);
    }
    for(let i = 0; i < 3; i++)
    {
        const suma = document.createElement("img");
        suma.src = "slike/suma.png"; 
        tabela.rows[verdnostSume[i]].cells[0].appendChild(suma);
    }
}


document.body.addEventListener("click", function(event) {
    const div = document.getElementById("div");

    if (event.target.id === "1") 
    {
        const tabela = document.createElement("table");
        tabela.id = "tabela1";
        div.appendChild(tabela);
        kreiranje(tabela);
        sakrivanejDugmica();
    }
    else if (event.target.id === "2")
    {
        for(let i = 1; i <= 2; i++)
        {
            const tabela = document.createElement("table");
            tabela.id = "tabela" + i;  
            div.appendChild(tabela); 
            kreiranje(tabela); 
        }
        sakrivanejDugmica();
    } 
    else if (event.target.id === "3")
    {
        for(let i = 1; i <= 3; i++)
        {
            const tabela = document.createElement("table");
            tabela.id = "tabela" + i;  
            div.appendChild(tabela); 
            kreiranje(tabela); 
        }
        sakrivanejDugmica();
    }       
});
function sakrivanejDugmica() 
{
    document.querySelectorAll("button").forEach(button => {
        button.hidden = true;
    });
}
function kreiranje(tabela)
{
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
}


function div1(tabela)
{
    for (let i = 1; i <= 6; i++) 
    {
        const novRed = tabela.insertRow(); 
        novRed.id = `red-` + i;
        for(let j = 0; j < broj - 1; j++)
        {
            const novaCelija = novRed.insertCell();
            if (j === 0) 
            {
                const zaglavlje = document.createElement("th");
                zaglavlje.textContent = i;
                novaCelija.replaceWith(zaglavlje);
                continue;
            }
            if (j === 10) 
                novaCelija.style.pointerEvents = "none";
            
            novaCelija.classList.add(`celijaDiv1-` + j);
            novaCelija.addEventListener("click", dodavanjeBrojeva);
        }
    }
    dodajOkvir(tabela, 1, 1, 'borderTop'); 
    dodajOkvir(tabela, 1, 8, 'borderTop'); 
}
function suma1(tabela) 
{
    let suma = tabela.querySelector("#suma-1");
    if (!suma) 
    {
        suma = tabela.insertRow();
        suma.id = "suma-1";
        for (let i = 0; i < broj; i++) 
        {
            const novaCelija = suma.insertCell();
            if (i === 0)
                sume(novaCelija);
        }
    }

    for (let i = 1; i < broj; i++) 
    {
        const novaCelija = tabela.querySelectorAll(`.celijaDiv1-` + i);
        let rezultat = 0;
        for (let j = 0; j < novaCelija.length; j++) 
            rezultat += parseInt(novaCelija[j].textContent) || 0;

        if(rezultat >= 60)
        {
            suma.cells[i].textContent = (rezultat + 30);
            suma.cells[i].style.color = "green";
            continue;
        }
        else if(rezultat < 60 && rezultat !== 0)
        {
            suma.cells[i].textContent = rezultat;
            suma.cells[i].style.color = "red";
        }
        else 
            suma.cells[i].textContent = '';
    }
}
function div2(tabela)
{
    const zaglavlja = {
        8: "MAX",
        9: "MIN"
    };
    for (let i = 8; i <= 9; i++) 
    {
        const novRed = tabela.insertRow(); 
        novRed.id = `red-` + i;
        for(let j = 0; j < broj - 1; j++)
        {
            const novaCelija = novRed.insertCell();
            if( zaglavlja[i] && j === 0 )
            {
                const zaglavlje = document.createElement("th");
                zaglavlje.textContent = zaglavlja[i];
                novaCelija.replaceWith(zaglavlje);
                continue;
            }
            if (j === 10) 
                novaCelija.style.pointerEvents = "none";

            novaCelija.classList.add(`celijaDiv2-` + i + j);
            novaCelija.addEventListener("click", dodavanjeBrojeva);
        }
    }
    dodajOkvir(tabela, 8, 7, 'borderBottom'); 
    dodajOkvir(tabela, 9, 7, 'borderTop'); 
}
function suma2(tabela) 
{
    let suma = tabela.querySelector("#suma-2");
    if (!suma) 
    {
        suma = tabela.insertRow();
        suma.id = "suma-2";
        for (let i = 0; i < broj; i++) 
        {
            const novaCelija = suma.insertCell();
            if (i === 0)
                sume(novaCelija);
        }
    }

    const prviRed = tabela.querySelector("#red-1");
    for (let i = 1; i < broj; i++) 
    {
        let celijaMAX = tabela.querySelector(`.celijaDiv2-8` + i);  
        let celijaMIN = tabela.querySelector(`.celijaDiv2-9` + i); 
        let celijaPrviRed = prviRed ? prviRed.cells[i] : null;
        let rezultat;
        if (celijaMAX && celijaMIN && celijaPrviRed) 
        {
            let brojMAX = parseInt(celijaMAX.textContent, 10);
            let brojMIN = parseInt(celijaMIN.textContent, 10);
            let brojPrvogReda = parseInt(celijaPrviRed.textContent, 10);
            if(!isNaN(brojMIN) && !isNaN(brojMAX) && !isNaN(brojPrvogReda))
            {
                rezultat = (brojMAX - brojMIN) * brojPrvogReda;
                suma.cells[i].textContent = rezultat;
                continue;
            } 
            else 
                suma.cells[i].textContent = '';
        } 
        else
            suma.cells[i].textContent = '';
    }
}
function div3(tabela)
{
    const zaglavlja = {
        11: "KENTA",
        12: "TRILING",
        13: "FUL",
        14: "POKER",
        15: "JAMB",
    };
    for (let i = 11; i <= 15; i++) 
    {
        const novRed = tabela.insertRow(); 
        novRed.id = `red-` + i;
        for(let j = 0; j < broj - 1; j++)
        {
            const novaCelija = novRed.insertCell();
            if(zaglavlja[i] && j === 0)
            {
                const zaglavlje = document.createElement("th");
                zaglavlje.textContent = zaglavlja[i];
                novaCelija.replaceWith(zaglavlje);
                continue;
            }
            if (j === 10) 
                novaCelija.style.pointerEvents = "none";

            novaCelija.classList.add(`celijaDiv3-` + j);
            novaCelija.addEventListener("click", dodavanjeBrojeva);
        }
    }
    dodajOkvir(tabela, 15, 3, 'borderBottom'); 
    dodajOkvir(tabela, 15, 8, 'borderBottom'); 
}
function suma3(tabela) 
{
    let suma = tabela.querySelector("#suma-3");
    if (!suma) 
    {
        suma = tabela.insertRow();
        suma.id = "suma-3";
        for (let i = 0; i < broj; i++) 
        {
            const novaCelija = suma.insertCell();
            if (i == 0)
                sume(novaCelija);
        }
    }

    for (let i = 1; i < broj; i++) 
    {
        const novaCelija = tabela.querySelectorAll(`.celijaDiv3-` + i);
        let rezultat = 0;
        for (let j = 0; j < novaCelija.length; j++) 
            rezultat += parseInt(novaCelija[j].textContent) || 0;
        suma.cells[i].textContent = (rezultat > 0) ? rezultat : '';
    }
}
function dodavanjeBrojeva(event)
{
    const celija = event.target;
    celija.setAttribute("contenteditable", "true");
    celija.focus();

    proveraUnosa(celija);

    celija.addEventListener("blur", function() {
        const unos = parseInt(celija.textContent, 10);
        const red = celija.parentNode;
        const tabela = red.closest("table");

        if ((red.id === "red-1" && (![0, 1, 2, 3, 4, 5].includes(unos))) ||
            (red.id === "red-2" && (![0, 2, 4, 6, 8, 10].includes(unos))) || 
            (red.id === "red-3" && (![0, 3, 6, 9, 12, 15].includes(unos))) ||
            (red.id === "red-4" && (![0, 4, 8, 12, 16, 20].includes(unos))) || 
            (red.id === "red-5" && (![0, 5, 10, 15, 20, 25].includes(unos))) ||
            (red.id === "red-6" && (![0, 6, 12, 18, 24, 30].includes(unos))) ||
            (red.id === "red-8" || red.id === "red-9")  &&  (unos < 5 || unos > 30 || isNaN(unos))|| 
            (red.id === "red-11" && (![0, 46, 56, 66].includes(unos))) ||
            (red.id === "red-12" && (![0, 33, 36, 39, 42, 45, 48].includes(unos))) || 
            (red.id === "red-13" && (((unos !== 0 && unos < 37) || unos > 58 || isNaN(unos)))) ||
            (red.id === "red-14" && (![0, 44, 48, 52, 56, 60, 64].includes(unos))) || 
            (red.id === "red-15" && (![0, 55, 60, 65, 70, 75, 80].includes(unos))))
                celija.textContent = "";
        
        celija.setAttribute("contenteditable", "false");
        m(tabela);
        suma1(tabela);
        suma2(tabela);
        suma3(tabela);
        suma4(tabela);
    });
}
function m(tabela) 
{
    for (let i = 1; i <= 15; i++) 
    {
        const novRed = tabela.rows[i];
        let max = 0, min = 30;
        let promena = false;
        if(i <= 6 || i === 8 || i >= 10)
        {
            for (let j = 1; j < broj - 2; j++) 
            {
                let trenutniBroj = parseInt(novRed.cells[j].textContent, 10);
                if (!isNaN(trenutniBroj) && trenutniBroj > max)
                {
                    max = trenutniBroj; 
                    promena = true;
                }
            }
            novRed.cells[broj - 2].textContent = promena ? max : '';
        }
        else if(i === 9)
        {
            for (let j = 1; j <  broj - 2; j++) 
            {
                let trenutniBroj = parseInt(novRed.cells[j].textContent, 10);
                if (!isNaN(trenutniBroj) && trenutniBroj < min)
                {
                    min = trenutniBroj; 
                    promena = true;
                }
            }
            novRed.cells[broj - 2].textContent = promena ? min : '';
        }
    }
}
function suma4(tabela)
{
    let red = [7, 10, 16];
    let suma = [];
    let zbir = [];
    let vrednost = [];
    let ukupno = 0;

    for(let i = 0; i < 3; i++)
    {
        suma[i] = tabela.rows[red[i]];
        zbir[i] = 0;
        vrednost[i] = 0;
    }

    for (let i = 1; i < broj - 1; i++) 
    {
        for (let j = 0; j < 3; j++) 
        {
            vrednost[j] = parseInt(suma[j].cells[i].textContent, 10);
            if (!isNaN(vrednost[j])) 
                zbir[j] += vrednost[j]; 
        }
    }

    for(let i = 0; i < 3; i++)
    {
        if(zbir[i] !== 0)
        {
            suma[i].cells[broj-1].textContent = zbir[i];
            ukupno += zbir[i];
        }
    }
    const red16 = tabela.querySelector("#red-16");
    const poeni = red16.querySelector("#poeni");
    poeni.textContent = (ukupno !== 0) ? ukupno : '';
}


document.body.addEventListener("blur", function (event) {
    const celija = event.target;
    const kolonaIndeks = celija.cellIndex;
    const tabela = celija.closest("table");
   
    if (!tabela) 
        return;
    const tabele = document.querySelectorAll("table");
    if (tabele.length <= 1) 
        return;

    const tabelaIndeks = Array.from(tabele).indexOf(tabela);
    if (kolonaIndeks === 4 && najava(celija)) 
    {
        const sledecaTabela = tabele[(tabelaIndeks + 1) % tabele.length];
        const redIndeks = celija.parentNode.rowIndex;
        const ciljanaCelija = sledecaTabela?.rows[redIndeks]?.cells[6];
        if (ciljanaCelija) 
            ciljanaCelija.classList.add("oznacena");
    }
    if (kolonaIndeks === 6 && najava(celija)) 
        if (celija.textContent.trim() !== "") 
            celija.classList.remove("oznacena");
}, true);

function najava(celija) 
{
    let unos = parseInt(celija.textContent, 10);
    const red = celija.parentNode;

    if ((red.id === "red-1" && (![0, 1, 2, 3, 4, 5].includes(unos))) ||
        (red.id === "red-2" && (![0, 2, 4, 6, 8, 10].includes(unos))) || 
        (red.id === "red-3" && (![0, 3, 6, 9, 12, 15].includes(unos))) ||
        (red.id === "red-4" && (![0, 4, 8, 12, 16, 20].includes(unos))) || 
        (red.id === "red-5" && (![0, 5, 10, 15, 20, 25].includes(unos))) ||
        (red.id === "red-6" && (![0, 6, 12, 18, 24, 30].includes(unos))) ||
        (red.id === "red-8" || red.id === "red-9")  &&  (unos < 5 || unos > 30 || isNaN(unos))|| 
        (red.id === "red-11" && (![0, 46, 56, 66].includes(unos))) ||
        (red.id === "red-12" && (![0, 33, 36, 39, 42, 45, 48].includes(unos))) || 
        (red.id === "red-13" && (((unos !== 0 && unos < 37) || unos > 58 || isNaN(unos)))) ||
        (red.id === "red-14" && (![0, 44, 48, 52, 56, 60, 64].includes(unos))) || 
        (red.id === "red-15" && (![0, 55, 60, 65, 70, 75, 80].includes(unos))))
            return false;
        
    return true; 
}
function dodajOkvir(tabela, redIndeks, kolonaIndeks, ivica) 
{
    const celija = tabela.rows[redIndeks].cells[kolonaIndeks];
    celija.style[ivica] = `3px solid black`;
}
const tabele = document.querySelectorAll("tabela");
tabele.forEach(tabela => {
    tabela.addEventListener('input', function() {
        m(tabela);
        suma1(tabela);
        suma2(tabela);
        suma3(tabela);
        suma4(tabela);
    });
});
function proveraUnosa(celija)
{
    celija.addEventListener('keydown', function(event) {
        const kljuc = event.key;
        if(!/^\d$/.test(kljuc)  && kljuc !== 'Backspace' && kljuc !== 'Delete')
            event.preventDefault();
    }); 

    celija.addEventListener('input', function(event) {
        let broj = celija.textContent.trim();
        if (broj[0] === '0' && broj.length > 1) 
            celija.textContent = '';
        
        else if (isNaN(broj) || parseInt(broj, 10) > 80) 
            celija.textContent = '';
        
    });
}