const prevod = {
    sr: {
        ui: {
            nova_partija: "Nova partija",
            obrisi_sve: "Obriši sve",
            vrati_se: "Odustani",
            zameni_broj: "Zameni broj",
            podesavanja: "PODEŠAVANJA",
            pravila: "Pravila",
            jezici: "Jezici",
            izlaz: "Izlaz",
            nazad: "Nazad",
            pravila_igre: "PRAVILA IGRE"
        },
        pravila: {
            opsta: {
                title: "OPŠTA PRAVILA",
                button_title: "Opšta",
                box: [
                    "Za igru je potrebno 6 kockica.",
                    "Igrač ima pravo da baca 3 puta.",
                    "\u00A0 Osim kada popunjava ručnu kolonu, tada sme da baci samo jednom.",
                    "Pri svakom bacanju odvaja kockice koje mu odgovaraju, a preostale baca ponovo.",
                    "Na kraju trećeg bacanja odvaja 5 kockica koje mu najviše odgovaraju i njihov zbir upisuje u polje."
                ]
            },
            objasnjenja_kolona: {
                title: "OBJAŠNJENJA KOLONA",
                box: [
                    "Druga kolona se naziva slobodna kolona i može se popunjavati proizvoljnim redosledom.",
                    "\"N\" kolona se naziva najava. Prilikom prvog bacanja igrač odlučuje da li će nešto najaviti, shodno dobijenim kockicama. Ako se odluči da najavi, mora odmah da kaže protivniku šta najavljuje. Te kockice odvaja sa strane i tek onda može da baca još dva puta ostale kockice.",
                    "\"R\" kolona se naziva ručna kolona i u nju se upisuje zbir kockica dobijen pri prvom bacanju.",
                    "\u00A0 Preporuka je da se u prvih 6 redova upiše odmah kada se dobiju 3 ista broja pri prvom bacanju.",
                    "\"D\" kolona se naziva dojava (odjava) i popunjava se nakon najave protivnika.",
                    "\u00A0 PR: Ako je protivnik najavio šestice, sledeći igrač baca 3 puta i odvaja sve šestice koje dobije. (Moguće je da ne dobije nijednu šesticu i u tom slučaju upisuje 0 u predviđeno polje.)",
                    "\"O\" kolona se popunjava na samom kraju partije. Redosled popunjavanja je odozgo prema dole.",
                    "\"M\" kolona automatski ažurira najveće brojeve iz svakog reda.",
                    "U žutim poljima se automatski računa zbir po sledećim pravilima:",
                    "\u00A0 Prva suma računa prvih 6 redova. Ovde je važno da zbir u koloni premaši 60 kako bi se dobilo dodatnih 30 poena.",
                    "\u00A0 Druga suma računa razliku MAX i MIN kolone i množi je sa brojem jedinica te kolone.",
                    "\u00A0 Treća suma samo računa zbir kolona bez dodavanja.",
                    "\u00A0 U poslednjoj ćeliji je zbir celog reda.",
                    "Konačan rezultat nalazi se u doljem desnom uglu u crnom polju."
                ]
            },
            nacin_racunanja: {
                title: "NAČIN RAČUNANJA",
                box: [
                    "Red 1: Zbir jedinica",
                    "Red 2: Zbir dvojki",
                    "Red 3: Zbir trojki",
                    "Red 4: Zbir četvorki",
                    "Red 5: Zbir petica",
                    "Red 6: Zbir šestica",
                    "MAX: Zbir 5 kockica sa najvećim brojevima",
                    "MIN: Zbir 5 kockica sa najmanjim brojevima",
                    "KENTA:",
                    "\u00A0 Ako je dobijena iz prvog puta upisuje se 66",
                    "\u00A0 Ako je dobijena iz drugog puta upisuje se 56",
                    "\u00A0 Ako je dobijena iz trećeg puta upisuje se 46",
                    "TRILING: Zbir 3 iste kockice +30",
                    "FUL: Zbir 2 iste i 3 iste kockice +30",
                    "POKER: Zbir 4 iste kockice +40",
                    "YAMB: Zbir 5 istih kockica +50"
                ]
            },
            smer_popunjavanja: {
                title: "SMER POPUNJAVANJA",
                box: [
                    "Kolona 1: Odozgo na dole",
                    "Kolona 2: Proizvoljnim redosledom",
                    "Kolona 3: Odozdo na gore",
                    "Kolona 4: Proizvoljnim redosledom",
                    "Kolona 5: Proizvoljnim redosledom",
                    "Kolona 6: Proizvoljnim redosledom",
                    "Kolona 7: Od MAX na gore, od MIN na dole",
                    "Kolona 8: Odozgo do MAX, odozdo do MIN",
                    "Kolona 9: Odozgo na dole",
                    "Kolona 10: Ne popunjava se",
                    {
                        link: {
                            text: "Slika - smer popunjavanja kolona",
                            href: "static/images/explanations/YAMB2.sr.bs.mk.me.png"
                        }
                    },
                ],
            },
            dozvoljene_vrednosti: {
                title: "DOZVOLJENE VREDNOSTI",
                box: [
                    "Red 1: 0, 1, 2, 3, 4, 5",
                    "Red 2: 0, 2, 4, 6, 8, 10",
                    "Red 3: 0, 3, 6, 9, 12, 15",
                    "Red 4: 0, 4, 8, 12, 16, 20",
                    "Red 5: 0, 5, 10, 15, 20, 25",
                    "Red 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Slika - dozvoljenih vrednosti po redovima",
                            href: "static/images/explanations/YAMB1.sr.bs.mk.me.png"
                        }
                    },
                ],
            },
            funkcionalnosti: {
                title: "FUNKCIONALNOSTI",
                box: [
                    "Yamb će čuvati rezultate dok se keš memorija pregledača ne obriše.",
                    "Da biste zatvorili tastaturu, potrebno je kliknuti na polje u koje nije moguće uneti broj.",
                    "\u00A0 Preporuka je da to bude pravougaonik ispod dugmeta za podešavanja.",
                    "Ako se rezultati ne vide odmah, potrebno je kliknuti unutar nekog polja u kojem je dozvoljen unos, a zatim izvan njega.",
                    "Pritiskom na dugme \"Nova partija\" igrač može da odabere:",
                    "\u00A0 \"Obriši sve\" kako bi započeo novu partiju i obrisao sve vrednosti iz tabele.",
                    "\u00A0 \"Odustani\" kako bi se vratio bez brisanja vrednosti iz tabele.",
                    "Ako je igrač uneo nedozvoljenu vrednost ona će biti obrisana i polje će pocrveneti.",
                    "\u00A0 Kako bi polje ponovo postalo belo, potrebno je uneti ispravnu vrednost u njega ili samo kliknuti na obojeno polje pa kliknuti bilo gde sa strane.",
                    "Ako igrač želi da promeni unos, moguće je obrisati staru vrednost i upisati novu, pri čemu će biti upitan da li želi da zameni broj ili odustaje od zamene.",
                    "\u00A0 \"Zameni broj\" će staru vrednost zameniti novom.",
                    "\u00A0 \"Odustani\" će prekinuti izmenu i vratiti staru vrednost.",
                    "Prilikom unošenja broja u najavu čuće se zvuk (ako je uključen)."
                ]
            }
        }
    },
    en: {
        ui: {
            nova_partija: "New game",
            obrisi_sve: "Clear all",
            vrati_se: "Cancel",
            zameni_broj: "Replace number",
            podesavanja: "SETTINGS",
            pravila: "Rules",
            jezici: "Languages",
            izlaz: "Exit",
            nazad: "Back",
            pravila_igre: "GAME RULES"
        },
        pravila: {
            opsta: {
                title: "GENERAL RULES",
                button_title: "General",
                box: [
                    "The game requires 6 dice.",
                    "The player may throw up to 3 times.",
                    "\u00A0 Except when filling in the hand column, where the player can only throw once.",
                    "After each throw, the player sets aside the dice that suit them and rethrows the remaining ones.",
                    "At the end of the third throw, the player sets aside the 5 dice that suit them best and records their sum."
                ]
            },
            objasnjenja_kolona: {
                title: "COLUMN EXPLANATIONS",
                box: [
                    "The second column is called the free column and can be filled in any order.",
                    "\"N\" column is the announcement. During the first throw, the player decides whether to announce something based on the dice they rolled. If they decide to announce, they must immediately tell the opponent what they are announcing. Those dice are separated, and only then can they throw the remaining dice two more times.",
                    "\"R\" column is the hand column where the sum of the dice from the first throw is recorded.",
                    "\u00A0 It is recommended to fill in the first 6 rows immediately if 3 identical numbers appear in the first throw.",
                    "\"D\" column is called the announcement (cancellation) and is filled after the opponent's announcement.",
                    "\u00A0 For example: If the opponent announces sixes, the next player throws 3 times and separates all the sixes they get. (It is possible that they do not get any sixes, in which case they write 0 in the designated field.)",
                    "\"O\" column is filled at the very end of the game. The column is filled from top to bottom.",
                    "\"M\" column automatically updates the highest numbers from each row.",
                    "In yellow fields, the sum is automatically calculated according to the following rules:",
                    "\u00A0 The first sum calculates the first 6 rows. Here, it is important that the column sum exceeds 60 to receive an additional 30 points.",
                    "\u00A0 The second sum calculates the difference between the MAX and MIN columns and multiplies it by the number of ones in that column.",
                    "\u00A0 The third sum simply calculates the total of the columns without adding anything.",
                    "\u00A0 The sum of the entire row is in the last cell.",
                    "The final score is located in the bottom right corner in the black cell."
                ]
            },
            nacin_racunanja: {
                title: "SCORING METHOD",
                box: [
                    "Row 1: Sum of ones",
                    "Row 2: Sum of twos",
                    "Row 3: Sum of threes",
                    "Row 4: Sum of fours",
                    "Row 5: Sum of fives",
                    "Row 6: Sum of sixes",
                    "MAX: Sum of the 5 dice with the highest values",
                    "MIN: Sum of the 5 dice with the lowest values",
                    "KENTA:",
                    "\u00A0 If obtained in the first throw, 66 is recorded.",
                    "\u00A0 If obtained in the second throw, 56 is recorded.",
                    "\u00A0 If obtained in the third throw, 46 is recorded.",
                    "TRILING: Sum of 3 identical dice +30",
                    "FUL: Sum of 2 identical and 3 identical dice +30",
                    "POKER: Sum of 4 identical dice +40",
                    "YAMB: Sum of 5 identical dice +50"
                ]
            },
            smer_popunjavanja: {
                title: "FILLING ORDER",
                box: [
                    "Column 1: Top to bottom",
                    "Column 2: In any order",
                    "Column 3: Bottom to top",
                    "Column 4: In any order",
                    "Column 5: In any order",
                    "Column 6: In any order",
                    "Column 7: From MAX to top, from MIN to bottom",
                    "Column 8: From top to MAX, from bottom to MIN",
                    "Column 9: Top to bottom",
                    "Column 10: Not filled",
                    {
                        link: {
                            text: "Picture – direction of column filling",
                            href: "static/images/explanations/YAMB2.en.png"
                        }
                    },
                ],
            },
            dozvoljene_vrednosti: {
                title: "ALLOWED VALUES",
                box: [
                    "Row 1: 0, 1, 2, 3, 4, 5",
                    "Row 2: 0, 2, 4, 6, 8, 10",
                    "Row 3: 0, 3, 6, 9, 12, 15",
                    "Row 4: 0, 4, 8, 12, 16, 20",
                    "Row 5: 0, 5, 10, 15, 20, 25",
                    "Row 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Picture – allowed values by rows",
                            href: "static/images/explanations/YAMB1.en.png"
                        }
                    },
                ],
            },
            funkcionalnosti: {
                title: "FUNCTIONALITIES",
                box: [
                    "Yamb will store the results until the browser cache is cleared.",
                    "To close the keyboard, you need to tap on a field where you cannot enter a number.",
                    "\u00A0 It is recommended that this be a rectangle below the settings button.",
                    "If the results are not visible immediately, it is necessary to click inside a field where input is allowed, and then outside of it.",
                    "By clicking the \"New Game\" button, the player can choose:",
                    "\u00A0 \"Clear all\" to start a new game and delete all values from the table.",
                    "\u00A0 \"Cancel\" to return without deleting values from the table.",
                    "If the player enters an invalid value, it will be deleted and the field will turn red.",
                    "\u00A0 To make the field white again, the correct value must be entered, or simply click on the colored field and then click anywhere outside.",
                    "If the player wants to change the entry, they can delete the old value and enter a new one, and will be asked whether they want to replace the number or cancel the change.",
                    "\u00A0 \"Replace number\" will replace the old value with the new one.",
                    "\u00A0 \"Cancel\" will cancel the change and keep the old value.",
                    "When a number is entered in the announcement, a sound will play (if enabled or turned up)."
                ]
            }
        }
    },
    hr: {
        ui: {
            nova_partija: "Nova igra",
            obrisi_sve: "Obriši sve",
            vrati_se: "Odustani",
            zameni_broj: "Zamijeni broj",
            podesavanja: "POSTAVKE",
            pravila: "Pravila",
            jezici: "Jezici",
            izlaz: "Izlaz",
            nazad: "Natrag",
            pravila_igre: "PRAVILA IGRE"
        },
        pravila: {
            opsta: {
                title: "OPĆA PRAVILA",
                button_title: "Opća",
                box: [
                    "Za igru je potrebno 6 kockica.",
                    "Igrač ima pravo baciti 3 puta.",
                    "\u00A0 Osim kada popunjava ručnu kolonu, tada smije baciti samo jednom.",
                    "Pri svakom bacanju odvaja kockice koje mu odgovaraju, a preostale baca ponovno.",
                    "Na kraju trećeg bacanja odvaja 5 kockica koje mu najviše odgovaraju i njihov zbroj upisuje u polje."
                ]
            },
            objasnjenja_kolona: {
                title: "OBJAŠNJENJA KOLONA",
                box: [
                    "Druga kolona se naziva slobodna kolona i može se popunjavati proizvoljnim redoslijedom.",
                    "\"N\" kolona se naziva najava. Prilikom prvog bacanja igrač odlučuje hoće li nešto najaviti, ovisno o dobijenim kockicama. Ako se odluči za najavu, mora odmah reći protivniku što najavljuje. Te kockice odvaja sa strane i tek tada može baciti preostale kockice još dva puta.",
                    "\"R\" kolona se naziva ručna kolona i u nju se upisuje zbroj kockica dobijen pri prvom bacanju.",
                    "\u00A0 Preporučuje se upisati odmah u prvih 6 redova ako se dobije 3 ista broja pri prvom bacanju.",
                    "\"D\" kolona se naziva dojava (odjava) i popunjava se nakon najave protivnika.",
                    "\u00A0 PR: Ako je protivnik najavio šestice, sljedeći igrač baca 3 puta i odvaja sve šestice koje dobije. (Moguće je da ne dobije ni jednu šesticu, a u tom slučaju upisuje 0 u predviđeno polje.)",
                    "\"O\" kolona se popunjava na samom kraju igre. Redoslijed popunjavanja je odozgo prema dolje.",
                    "\"M\" kolona automatski ažurira najveće brojeve iz svakog reda.",
                    "U žutim poljima automatski se računa zbroj prema sljedećim pravilima:",
                    "\u00A0 Prvi zbroj računa prvih 6 redova. Važno je da zbroj u koloni premaši 60 kako bi se dobilo dodatnih 30 bodova.",
                    "\u00A0 Drugi zbroj računa razliku između MAX i MIN kolone i množi je sa brojem kečeva te kolone.",
                    "\u00A0 Treći zbroj samo računa zbroj kolona bez dodavanja.",
                    "\u00A0 U posljednjoj ćeliji je zbroj cijelog redka.",
                    "Konačni rezultat nalazi se u donjem desnom kutu u crnom polju."
                ]
            },
            nacin_racunanja: {
                title: "NAČIN RAČUNANJA",
                box: [
                    "Redak 1: Zbroj jedinica",
                    "Redak 2: Zbroj dvojki",
                    "Redak 3: Zbroj trojki",
                    "Redak 4: Zbroj četvorki",
                    "Redak 5: Zbroj petica",
                    "Redak 6: Zbroj šestica",
                    "MAX: Zbroj 5 kockica s najvećim brojevima",
                    "MIN: Zbroj 5 kockica s najmanjim brojevima",
                    "KENTA:",
                    "\u00A0 Ako je dobijena iz prvog bacanja upisuje se 66",
                    "\u00A0 Ako je dobijena iz drugog bacanja upisuje se 56",
                    "\u00A0 Ako je dobijena iz trećeg bacanja upisuje se 46",
                    "TRILING: Zbroj 3 iste kockice +30",
                    "FUL: Zbroj 2 iste i 3 iste kockice +30",
                    "POKER: Zbroj 4 iste kockice +40",
                    "YAMB: Zbroj 5 istih kockica +50"
                ]
            },
            smer_popunjavanja: {
                title: "SMJER POPUNJAVANJA",
                box: [
                    "Stupac 1: Odozgo na dolje",
                    "Stupac 2: Proizvoljnim redoslijedom",
                    "Stupac 3: Odozdo na gore",
                    "Stupac 4: Proizvoljnim redoslijedom",
                    "Stupac 5: Proizvoljnim redoslijedom",
                    "Stupac 6: Proizvoljnim redoslijedom",
                    "Stupac 7: Od MAX na gore, od MIN na dolje",
                    "Stupac 8: Odozgo do MAX, odozdo do MIN",
                    "Stupac 9: Odozgo na dolje",
                    "Stupac 10: Ne popunjava se",
                    {
                        link: {
                            text: "Slika – smjer popunjavanja stupaca",
                            href: "static/images/explanations/YAMB2.hr.sl.png"
                        }
                    },
                ],
            },
            dozvoljene_vrednosti: {
                title: "DOZVOLJENE VRIJEDNOSTI",
                box: [
                    "Redak 1: 0, 1, 2, 3, 4, 5",
                    "Redak 2: 0, 2, 4, 6, 8, 10",
                    "Redak 3: 0, 3, 6, 9, 12, 15",
                    "Redak 4: 0, 4, 8, 12, 16, 20",
                    "Redak 5: 0, 5, 10, 15, 20, 25",
                    "Redak 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Slika – dopuštenih vrijednosti po redcima",
                            href: "static/images/explanations/YAMB1.hr.sl.png"
                        }
                    },
                ],
            },
            funkcionalnosti: {
                title: "FUNKCIONALNOSTI",
                box: [
                    "Yamb će čuvati rezultate dok se predmemorija preglednika ne izbriše.",
                    "Da biste zatvorili tipkovnicu, potrebno je kliknuti na polje u koje nije moguće unijeti broj.",
                    "\u00A0 Preporuka je da to bude pravokutnik ispod gumba za postavke.",
                    "Ako se rezultati ne vide odmah, potrebno je kliknuti unutar nekog polja u kojem je dopušten unos, a zatim izvan njega.",
                    "Pritiskom na dugme \"Nova igra\" igrač može odabrati:",
                    "\u00A0 \"Obriši sve\" kako bi započeo novu igru i obrisao sve vrijednosti iz tablice.",
                    "\u00A0 \"Odustani\" kako bi se vratio bez brisanja vrijednosti iz tablice.",
                    "Ako igrač unese nedozvoljenu vrijednost, ona će biti obrisana i polje će postati crveno.",
                    "\u00A0 Da bi polje ponovno postalo bijelo, potrebno je unijeti ispravnu vrijednost u njega ili jednostavno kliknuti na obojeno polje pa zatim bilo gdje sa strane.",
                    "Ako igrač želi promijeniti unos, može obrisati staru vrijednost i upisati novu, pri čemu će biti upitan želi li zamijeniti broj ili odustati od zamjene.",
                    "\u00A0 \"Zamijeni broj\" će zamijeniti staru vrijednost s novom.",
                    "\u00A0 \"Odustani\" će prekinuti izmjenu i vratiti staru vrijednost.",
                    "Prilikom unošenja broja u najavu čut će se zvuk (ako je uključen)."
                ]
            }
        }
    },
    bs: {
        ui: {
            nova_partija: "Nova partija",
            obrisi_sve: "Obriši sve",
            vrati_se: "Odustani",
            zameni_broj: "Zamijeni broj",
            podesavanja: "POSTAVKE",
            pravila: "Pravila",
            jezici: "Jezici",
            izlaz: "Izlaz",
            nazad: "Nazad",
            pravila_igre: "PRAVILA IGRE"
        },
        pravila: {
            opsta: {
                title: "OPĆA PRAVILA",
                button_title: "Opća",
                box: [
                    "Za igru je potrebno 6 kockica.",
                    "Igrač ima pravo baciti 3 puta.",
                    "\u00A0 Osim kada popunjava ručnu kolonu, tada smije baciti samo jednom.",
                    "Pri svakom bacanju odvaja kockice koje mu odgovaraju, a preostale baca ponovno.",
                    "Na kraju trećeg bacanja odvaja 5 kockica koje mu najviše odgovaraju i njihov zbir upisuje u polje."
                ]
            },
            objasnjenja_kolona: {
                title: "OBJAŠNJENJA KOLONA",
                box: [
                    "Druga kolona se naziva slobodna kolona i može se popunjavati proizvoljnim redoslijedom.",
                    "\"N\" kolona se naziva najava. Prilikom prvog bacanja igrač odlučuje hoće li nešto najaviti, ovisno o dobijenim kockicama. Ako se odluči za najavu, mora odmah reći protivniku šta najavljuje. Te kockice odvaja sa strane i tek tada može baciti preostale kockice još dva puta.",
                    "\"R\" kolona se naziva ručna kolona i u nju se upisuje zbir kockica dobijen pri prvom bacanju.",
                    "\u00A0 Preporučuje se upisati odmah u prvih 6 redova ako se dobije 3 ista broja pri prvom bacanju.",
                    "\"D\" kolona se naziva dojava (odjava) i popunjava se nakon najave protivnika.",
                    "\u00A0 PR: Ako je protivnik najavio šestice, sljedeći igrač baca 3 puta i odvaja sve šestice koje dobije. (Moguće je da ne dobije ni jednu šesticu, a u tom slučaju upisuje 0 u predviđeno polje.)",
                    "\"O\" kolona se popunjava na samom kraju igre. Redoslijed popunjavanja je odozgo prema dolje.",
                    "\"M\" kolona automatski ažurira najveće brojeve iz svakog reda.",
                    "U žutim poljima automatski se računa zbir prema sljedećim pravilima:",
                    "\u00A0 Prvi zbir računa prvih 6 redova. Važno je da zbir u koloni premaši 60 kako bi se dobilo dodatnih 30 bodova.",
                    "\u00A0 Drugi zbir računa razliku između MAX i MIN kolone i množi je sa brojem kečeva te kolone.",
                    "\u00A0 Treći zbir samo računa zbir kolona bez dodavanja.",
                    "\u00A0 U posljednjoj ćeliji je zbir cijelog reda.",
                    "Konačan rezultat nalazi se u donjem desnom uglu u crnom polju."
                ]
            },
            nacin_racunanja: {
                title: "NAČIN RAČUNANJA",
                box: [
                    "Red 1: Zbir jedinica",
                    "Red 2: Zbir dvojki",
                    "Red 3: Zbir trojki",
                    "Red 4: Zbir četvorki",
                    "Red 5: Zbir petica",
                    "Red 6: Zbir šestica",
                    "MAX: Zbir 5 kockica s najvećim brojevima",
                    "MIN: Zbir 5 kockica s najmanjim brojevima",
                    "KENTA:",
                    "\u00A0 Ako je dobijena iz prvog bacanja upisuje se 66",
                    "\u00A0 Ako je dobijena iz drugog bacanja upisuje se 56",
                    "\u00A0 Ako je dobijena iz trećeg bacanja upisuje se 46",
                    "TRILING: Zbir 3 iste kockice +30",
                    "FUL: Zbir 2 iste i 3 iste kockice +30",
                    "POKER: Zbir 4 iste kockice +40",
                    "YAMB: Zbir 5 istih kockica +50"
                ]
            },
            smer_popunjavanja: {
                title: "SMJER POPUNJAVANJA",
                box: [
                    "Kolona 1: Odozgo na dolje",
                    "Kolona 2: Proizvoljnim redoslijedom",
                    "Kolona 3: Odozdo na gore",
                    "Kolona 4: Proizvoljnim redoslijedom",
                    "Kolona 5: Proizvoljnim redoslijedom",
                    "Kolona 6: Proizvoljnim redoslijedom",
                    "Kolona 7: Od MAX na gore, od MIN na dolje",
                    "Kolona 8: Odozgo do MAX, odozdo do MIN",
                    "Kolona 9: Odozgo na dolje",
                    "Kolona 10: Ne popunjava se",
                    {
                        link: {
                            text: "Slika – smjer popunjavanja kolona",
                            href: "static/images/explanations/YAMB2.sr.bs.mk.me.png"
                        }
                    },
                ],
            },
            dozvoljene_vrednosti: {
                title: "DOZVOLJENE VRIJEDNOSTI",
                box: [
                    "Red 1: 0, 1, 2, 3, 4, 5",
                    "Red 2: 0, 2, 4, 6, 8, 10",
                    "Red 3: 0, 3, 6, 9, 12, 15",
                    "Red 4: 0, 4, 8, 12, 16, 20",
                    "Red 5: 0, 5, 10, 15, 20, 25",
                    "Red 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Slika – dozvoljenih vrijednosti po redovima",
                            href: "static/images/explanations/YAMB1.sr.bs.mk.me.png"
                        }
                    },
                ],
            },
            funkcionalnosti: {
                title: "FUNKCIONALNOSTI",
                box: [
                    "Yamb će čuvati rezultate dok se keš memorija preglednika ne obriše.",
                    "Da biste zatvorili tastaturu, potrebno je kliknuti na polje u koje nije moguće unijeti broj.",
                    "\u00A0 Preporuka je da to bude pravougaonik ispod dugmeta za podešavanja.",
                    "Ako se rezultati ne vide odmah, potrebno je kliknuti unutar nekog polja u kojem je dozvoljen unos, a zatim izvan njega.",
                    "Pritiskom na dugme \"Nova partija\" igrač može odabrati:",
                    "\u00A0 \"Obriši sve\" kako bi započeo novu partiju i obrisao sve vrijednosti iz tabele.",
                    "\u00A0 \"Odustani\" kako bi se vratio bez brisanja vrijednosti iz tabele.",
                    "Ako igrač unese nedozvoljenu vrijednost, ona će biti obrisana i polje će postati crveno.",
                    "\u00A0 Da bi polje ponovo postalo bijelo, potrebno je unijeti ispravnu vrijednost ili jednostavno kliknuti na obojeno polje, pa potom kliknuti bilo gdje izvan njega.",
                    "Ako igrač želi promijeniti unos, može obrisati staru vrijednost i unijeti novu, pri čemu će biti upitan da li želi zamijeniti broj ili odustati od zamjene.",
                    "\u00A0 \"Zamijeni broj\" će zamijeniti staru vrijednost s novom.",
                    "\u00A0 \"Odustani\" će prekinuti izmjenu i vratiti staru vrijednost.",
                    "Prilikom unošenja broja u najavu čut će se zvuk (ako je uključen)."
                ]
            }
        }
    },
    mk: {
        ui: {
            nova_partija: "Nova partija",
            obrisi_sve: "Izbriši se",
            vrati_se: "Otkaži",
            zameni_broj: "Zameni broj",
            podesavanja: "POSTAVKI",
            pravila: "Pravila",
            jezici: "Jezici",
            izlaz: "Izlez",
            nazad: "Nazad",
            pravila_igre: "PRAVILA NA IGRATA"
        },
        pravila: {
            opsta: {
                title: "OPŠTI PRAVILA",
                button_title: "Opšti",
                box: [
                    "Za igrata se potrebni 6 kockici.",
                    "Igračot ima pravo da frli 3 pati.",
                    "\u00A0 Osven koga ja popolnuva račnata kolona, togaš sme da frli samo eden pat.",
                    "Pri sekoe frlanje gi odvojuva kockicite što mu odgovaraat, a ostanatite gi frla povtorno.",
                    "Na krajot od tretoto frlanje gi odvojuva 5 kockici što mu najmnogu odgovaraat i nivniot zbir go zapišuva vo pole."
                ]
            },
            objasnjenja_kolona: {
                title: "OBJASNENJA KOLONA",
                box: [
                    "Vtorata kolona se narekuva slobodna kolona i može da se popolnuva proizvolen redosled.",
                    "\"N\" kolona se narekuva najava. Pri prvoto frlanje igračot odlučuva dali ke najavi nešto, spored dobienite kockici. Ako odluči da najavi, mora vednaš da mu kaze na protivnikot što najavuva. Tie kockici gi odvojuva na strana i samo togaš može da gi frli ostanatite kockici uste dva pati.",
                    "\"R\" kolona se narekuva račna kolona i vo nea se zapišuva zbir na kockicite dobieni pri prvoto frlanje.",
                    "\u00A0 Preporaka e da se zapiše vo prvite 6 redovi vednaš koga ke se dobijat 3 isti broevi pri prvoto frlanje.",
                    "\"D\" kolona se narekuva dojavi (odjavi) i se popolnuva po najavata na protivnikot.",
                    "\u00A0 PR: Ako protivnikot najavi šestici, sledniot igrać frla 3 pati i gi odvojuva site šestici što ke gi dobije. (Možno e da ne dobije nitu edna šestica, i vo toj slučaj zapišuva 0 vo predvidenoto pole.)",
                    "\"O\" kolona se popolnuva na samiot kraj od igrata. Redosledot na popolnuvanje e odgore nadole.",
                    "\"M\" kolona avtomatski gi ažurira najgolemite broevi od sekoj red.",
                    "Vo žolti polinja avtomatski se presmetuva zbir spored slednite pravila:",
                    "\u00A0 Prviot zbir gi presmetuva prvite 6 redovi. Važno e zbir vo kolonata da nadmine 60 za da se dobijat dopolnitelni 30 poeni.",
                    "\u00A0 Vtoriot zbir ja presmetuva razlikata pomegju MAX i MIN kolona i ja množi so brojot na kecovi vo taa kolona.",
                    "\u00A0 Tretiot zbir samo go presmetuva zbir na kolonite bez dodavanje.",
                    "\u00A0 Vo poslednata ćelija e zbir na celot red.",
                    "Konečnata rezultatka se naoga vo dolniot desni agol vo crnoto pole."
                ]
            },
            nacin_racunanja: {
                title: "NAČIN NA PRESMETUVANJE",
                box: [
                    "Red 1: Zbir na edinici",
                    "Red 2: Zbir na dvojki",
                    "Red 3: Zbir na trojki",
                    "Red 4: Zbir na četvorki",
                    "Red 5: Zbir na petici",
                    "Red 6: Zbir na šestici",
                    "MAX: Zbir na 5 kockici so najgolemi broevi",
                    "MIN: Zbir na 5 kockici so najmali broevi",
                    "KENTA:",
                    "\u00A0 Ako e dobiеnа od prvo frlanje se zapišuva 66",
                    "\u00A0 Ako e dobiеnа od vtoro frlanje se zapišuva 56",
                    "\u00A0 Ako e dobiеnа od tretoto frlanje se zapišuva 46",
                    "TRILING: Zbir na 3 isti kockici +30",
                    "FUL: Zbir na 2 isti i 3 isti kockici +30",
                    "POKER: Zbir na 4 isti kockici +40",
                    "YAMB: Zbir na 5 isti kockici +50"
                ]
            },
            smer_popunjavanja: {
                title: "SMER NA POPOLNUVANJE",
                box: [
                    "Kolona 1: Odgore nadole",
                    "Kolona 2: Proizvolen redosled",
                    "Kolona 3: Odzdole nagore",
                    "Kolona 4: Proizvolen redosled",
                    "Kolona 5: Proizvolen redosled",
                    "Kolona 6: Proizvolen redosled",
                    "Kolona 7: Od MAX nagore, od MIN nadolu",
                    "Kolona 8: Odgore do MAX, odzdole do MIN",
                    "Kolona 9: Odgore nadole",
                    "Kolona 10: Ne se popolnuva",
                    {
                        link: {
                            text: "Slika – nasoka na popolnuvanje na kolonite",
                            href: "static/images/explanations/YAMB2.sr.bs.mk.me.png"
                        }
                    }
                ]
            },
            dozvoljene_vrednosti: {
                title: "DOZVOLENI VREDNOSTI",
                box: [
                    "Red 1: 0, 1, 2, 3, 4, 5",
                    "Red 2: 0, 2, 4, 6, 8, 10",
                    "Red 3: 0, 3, 6, 9, 12, 15",
                    "Red 4: 0, 4, 8, 12, 16, 20",
                    "Red 5: 0, 5, 10, 15, 20, 25",
                    "Red 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Slika – dozvolenite vrednosti po redovi",
                            href: "static/images/explanations/YAMB1.sr.bs.mk.me.png"
                        }
                    }
                ]
            },
            funkcionalnosti: {
                title: "FUNKCIONALNOSTI",
                box: [
                    "Yamb ke gi čuva rezultatite dodeka ne se izbrishe keš memorijata na prebaruvačot.",
                    "Za da se zatvori tastaturata, potrebno e da se klikne na pole vo koe ne može da se vnese broj.",
                    "\u00A0 Se preporakuva toa da bide pravoagolnik pod kopčeto za postavki.",
                    "Ako rezultatite ne se gledaat vednaš, potrebno e da se klikne vnatre vo nekoe pole vo koe e dozvolen vnes, pa potoa nadvor od nego.",
                    "So pritisk na kopčeto \"Nova partija\" igračot može da odabere:",
                    "\u00A0 \"Izbriši se\" za da započne nova partija i da gi izbriši site vrednosti od tabelata.",
                    "\u00A0 \"Otkaži\" za da se vrati bez da gi izbriši vrednostite od tabelata.",
                    "Ako igračot vnese nedozvolena vrednost, taa kje bide izbrisana i poleto kje stane crveno.",
                    "\u00A0 Za poleto ponovo da stane belo, potrebno e da se vnese ispravna vrednost ili ednostavno da se klikne na obojenoto pole i potoa da se klikne bilo kade nadvor.",
                    "Ako igračot saka da go promeni vnesot, može da ja izbriše starata vrednost i da vnese nova, pri toa kje bide prašan dali saka da go zameni brojot ili da se otkaže od zamena.",
                    "\u00A0 \"Zameni broj\" ke ja zameni starata vrednost so nova.",
                    "\u00A0 \"Otkaži\" ke ja prekinе izmenata i ke ja vrati starata vrednost.",
                    "Pri vnesuvanje na broj vo najavata, ke se sluša zvuk (ako e vkluchen)."
                ]
            }
        }
    },
    sl: {
        ui: {
            nova_partija: "Nova igra",
            obrisi_sve: "Izbriši vse",
            vrati_se: "Prekliči",
            zameni_broj: "Zamenjaj številko",
            podesavanja: "NASTAVITVE",
            pravila: "Pravila",
            jezici: "Jeziki",
            izlaz: "Izhod",
            nazad: "Nazaj",
            pravila_igre: "PRAVILA IGRE"
        },
        pravila: {
            opsta: {
                title: "SPLOŠNA PRAVILA",
                button_title: "Splošna",
                box: [
                    "Za igro je potrebnih 6 kock.",
                    "Igralec ima pravico vreči trikrat.",
                    "\u00A0 Razen kadar izpolnjuje ročno kolono, sme vreči samo enkrat.",
                    "Pri vsakem metu loči kocke, ki mu ustrezajo, preostale pa vrže ponovno.",
                    "Ob koncu tretjega meta loči 5 kock, ki mu najbolj ustrezajo, in njihov seštevek zapiše v polje."
                ]
            },
            objasnjenja_kolona: {
                title: "POJASNILA KOLOM",
                box: [
                    "Druga kolona se imenuje prosta kolona in jo lahko izpolnjujete po poljubnem vrstnem redu.",
                    "\"N\" kolona se imenuje napoved. Pri prvem metu se igralec odloči, ali bo kaj napovedal, glede na dobljene kocke. Če se odloči za napoved, mora takoj povedati nasprotniku, kaj napoveduje. Te kocke loči na stran in šele nato lahko še dvakrat vrže preostale kocke.",
                    "\"R\" kolona se imenuje ročna kolona in vanjo se zapiše seštevek kock, dobljenih pri prvem metu.",
                    "\u00A0 Priporočljivo je, da se v prvih 6 vrsticah zapiše takoj, ko se pri prvem metu dobijo 3 enake številke.",
                    "\"D\" kolona se imenuje obvestilo (odjava) in se izpolni po napovedi nasprotnika.",
                    "\u00A0 PR: Če nasprotnik napove šestice, naslednji igralec vrže trikrat in loči vse šestice, ki jih dobi. (Možno je, da ne dobi nobene šestice, in v tem primeru zapiše 0 v predvideno polje.)",
                    "\"O\" kolona se izpolni na koncu igre. Zaporedje izpolnjevanja je od zgoraj navzdol.",
                    "\"M\" kolona samodejno posodobi največje številke v vsaki vrstici.",
                    "V rumenih poljih se samodejno izračuna vsota po naslednjih pravilih:",
                    "\u00A0 Prva vsota izračuna prvih 6 vrstic. Pomembno je, da vsota v koloni preseže 60, da se pridobi dodatnih 30 točk.",
                    "\u00A0 Druga vsota izračuna razliko med MAX in MIN kolono in jo pomnoži s številom enic v tej koloni.",
                    "\u00A0 Tretja vsota samo izračuna vsoto kolone brez dodatkov.",
                    "\u00A0 V zadnji celici je vsota celotne vrstice.",
                    "Končni rezultat se nahaja v spodnjem desnem kotu v črni celici."
                ]
            },
            nacin_racunanja: {
                title: "NAČIN IZRAČUNA",
                box: [
                    "Vrstica 1: Vsota enic",
                    "Vrstica 2: Vsota dvojk",
                    "Vrstica 3: Vsota trojk",
                    "Vrstica 4: Vsota štiric",
                    "Vrstica 5: Vsota petic",
                    "Vrstica 6: Vsota šestic",
                    "MAX: Vsota 5 kock z največjimi številkami",
                    "MIN: Vsota 5 kock z najmanjšimi številkami",
                    "KENTA:",
                    "\u00A0 Če je pridobljena pri prvem metu, zapiše se 66",
                    "\u00A0 Če je pridobljena pri drugem metu, zapiše se 56",
                    "\u00A0 Če je pridobljena pri tretjem metu, zapiše se 46",
                    "TRILING: Vsota treh enakih kock +30",
                    "FUL: Vsota dveh enakih in treh enakih kock +30",
                    "POKER: Vsota štirih enakih kock +40",
                    "YAMB: Vsota petih enakih kock +50"
                ]
            },
            smer_popunjavanja: {
                title: "SMER IZPOLNJEVANJA",
                box: [
                    "Stolpec 1: Od zgoraj navzdol",
                    "Stolpec 2: Po poljubnem vrstnem redu",
                    "Stolpec 3: Od spodaj navzgor",
                    "Stolpec 4: Po poljubnem vrstnem redu",
                    "Stolpec 5: Po poljubnem vrstnem redu",
                    "Stolpec 6: Po poljubnem vrstnem redu",
                    "Stolpec 7: Od MAX navzgor, od MIN navzdol",
                    "Stolpec 8: Od zgoraj do MAX, od spodaj do MIN",
                    "Stolpec 9: Od zgoraj navzdol",
                    "Stolpec 10: Ne izpolni se",
                    {
                        link: {
                            text: "Slika – smer izpolnjevanja stolpcev",
                            href: "static/images/explanations/YAMB2.hr.sl.png"
                        }
                    }
                ]
            },
            dozvoljene_vrednosti: {
                title: "DOVOLJENE VREDNOSTI",
                box: [
                    "Vrstica 1: 0, 1, 2, 3, 4, 5",
                    "Vrstica 2: 0, 2, 4, 6, 8, 10",
                    "Vrstica 3: 0, 3, 6, 9, 12, 15",
                    "Vrstica 4: 0, 4, 8, 12, 16, 20",
                    "Vrstica 5: 0, 5, 10, 15, 20, 25",
                    "Vrstica 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Slika – dovoljenih vrednosti po vrsticah",
                            href: "static/images/explanations/YAMB1.hr.sl.png"
                        }
                    }
                ]
            },
            funkcionalnosti: {
                title: "FUNKCIONALNOSTI",
                box: [
                    "Yamb bo shranjeval rezultate, dokler se predpomnilnik brskalnika ne izbriše.",
                    "Če želite zapreti tipkovnico, morate klikniti na polje, v katerega ni mogoče vnesti številko.",
                    "\u00A0 Priporočljivo je, da je to pravokotnik pod gumbom za nastavitve.",
                    "Če se rezultati ne prikažejo takoj, je treba klikniti znotraj polja, kjer je dovoljen vnos, nato pa zunaj njega.",
                    "S pritiskom na gumb \"Nova igra\" lahko igralec izbere:",
                    "\u00A0 \"Izbriši vse\" za začetek nove igre in izbris vseh vrednosti v tabeli.",
                    "\u00A0 \"Prekliči\" za vrnitev brez brisanja vrednosti iz tabele.",
                    "Če igralec vnese nedovoljeno vrednost, bo ta izbrisana in polje bo postalo rdeče.",
                    "\u00A0 Da bo polje ponovno belo, je treba vnesti pravilno vrednost, ali pa enostavno klikniti na obarvano polje in nato klikniti kjerkoli zunaj.",
                    "Če želi igralec spremeniti vnos, lahko izbriše staro vrednost in vnese novo, pri tem pa bo vprašani, ali želi zamenjati številko ali preklicati zamenjavo.",
                    "\u00A0 \"Zamenjaj številko\" bo staro vrednost zamenjalo z novo.",
                    "\u00A0 \"Prekliči\" bo prekinilo spremembo in vrnilo staro vrednost.",
                    "Ob vnosu številke v napoved se bo slišal zvok (če je vklopljen)."
                ]
            }
        }
    },
    me: {
        ui: {
            nova_partija: "Nova partija",
            obrisi_sve: "Obriši sve",
            vrati_se: "Odustani",
            zameni_broj: "Zamijeni broj",
            podesavanja: "PODEŠAVANJA",
            pravila: "Pravila",
            jezici: "Jezici",
            izlaz: "Izlaz",
            nazad: "Nazad",
            pravila_igre: "PRAVILA IGRE"
        },
        pravila: {
            opsta: {
                title: "OPŠTA PRAVILA",
                button_title: "Opšta",
                box: [
                    "Za igru je potrebno 6 kockica.",
                    "Igrač ima pravo da baca 3 puta.",
                    "\u00A0 Osim kada popunjava ručnu kolonu, tada smije da baci samo jednom.",
                    "Pri svakom bacanju odvaja kockice koje mu odgovaraju, a preostale baca ponovo.",
                    "Na kraju trećeg bacanja odvaja 5 kockica koje mu najviše odgovaraju i njihov zbir upisuje u polje."
                ]
            },
            objasnjenja_kolona: {
                title: "OBJAŠNJENJA KOLONA",
                box: [
                    "Druga kolona se naziva slobodna kolona i može se popunjavati proizvoljnim redosledom.",
                    "\"N\" kolona se naziva najava. Prilikom prvog bacanja igrač odlučuje da li će nešto najaviti, shodno dobijenim kockicama. Ako se odluči da najavi, mora odmah da kaže protivniku šta najavljuje. Te kockice odvaja sa strane i tek onda može da baca još dva puta ostale kockice.",
                    "\"R\" kolona se naziva ručna kolona i u nju se upisuje zbir kockica dobijen pri prvom bacanju.",
                    "\u00A0 Preporuka je da se u prvih 6 redova upiše odmah kada se dobiju 3 ista broja pri prvom bacanju.",
                    "\"D\" kolona se naziva dojava (odjava) i popunjava se nakon najave protivnika.",
                    "\u00A0 PR: Ako je protivnik najavio šestice, sljedeći igrač baca 3 puta i odvaja sve šestice koje dobije. (Moguće je da ne dobije nijednu šesticu i u tom slučaju upisuje 0 u predviđeno polje.)",
                    "\"O\" kolona se popunjava na samom kraju partije. Redosled popunjavanja je odozgo prema dolje.",
                    "\"M\" kolona automatski ažurira najveće brojeve iz svakog reda.",
                    "U žutim poljima se automatski računa zbir po sljedećim pravilima:",
                    "\u00A0 Prva suma računa prvih 6 redova. Ovdje je važno da zbir u koloni premaši 60 kako bi se dobilo dodatnih 30 poena.",
                    "\u00A0 Druga suma računa razliku MAX i MIN kolone i množi je sa brojem jedinica te kolone.",
                    "\u00A0 Treća suma samo računa zbir kolona bez dodavanja.",
                    "\u00A0 U posljednjoj ćeliji je zbir cijelog reda.",
                    "Konačan rezultat nalazi se u donjem desnom uglu u crnom polju."
                ]
            },
            nacin_racunanja: {
                title: "NAČIN RAČUNANJA",
                box: [
                    "Red 1: Zbir jedinica",
                    "Red 2: Zbir dvojki",
                    "Red 3: Zbir trojki",
                    "Red 4: Zbir četvorki",
                    "Red 5: Zbir petica",
                    "Red 6: Zbir šestica",
                    "MAX: Zbir 5 kockica sa najvećim brojevima",
                    "MIN: Zbir 5 kockica sa najmanjim brojevima",
                    "KENTA:",
                    "\u00A0 Ako je dobijena iz prvog bacanja upisuje se 66",
                    "\u00A0 Ako je dobijena iz drugog bacanja upisuje se 56",
                    "\u00A0 Ako je dobijena iz trećeg bacanja upisuje se 46",
                    "TRILING: Zbir 3 iste kockice +30",
                    "FUL: Zbir 2 iste i 3 iste kockice +30",
                    "POKER: Zbir 4 iste kockice +40",
                    "YAMB: Zbir 5 istih kockica +50"
                ]
            },
            smer_popunjavanja: {
                title: "SMJER POPUNJAVANJA",
                box: [
                    "Kolona 1: Odozgo na dolje",
                    "Kolona 2: Proizvoljnim redosledom",
                    "Kolona 3: Odozdo na gore",
                    "Kolona 4: Proizvoljnim redosledom",
                    "Kolona 5: Proizvoljnim redosledom",
                    "Kolona 6: Proizvoljnim redosledom",
                    "Kolona 7: Od MAX na gore, od MIN na dolje",
                    "Kolona 8: Odozgo do MAX, odozdo do MIN",
                    "Kolona 9: Odozgo na dolje",
                    "Kolona 10: Ne popunjava se",
                    {
                        link: {
                            text: "Slika – smjer popunjavanja kolona",
                            href: "static/images/explanations/YAMB2.sr.bs.mk.me.png"
                        }
                    }
                ]
            },
            dozvoljene_vrednosti: {
                title: "DOZVOLJENE VRIJEDNOSTI",
                box: [
                    "Red 1: 0, 1, 2, 3, 4, 5",
                    "Red 2: 0, 2, 4, 6, 8, 10",
                    "Red 3: 0, 3, 6, 9, 12, 15",
                    "Red 4: 0, 4, 8, 12, 16, 20",
                    "Red 5: 0, 5, 10, 15, 20, 25",
                    "Red 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Slika – dozvoljenih vrijednosti po redovima",
                            href: "static/images/explanations/YAMB1.sr.bs.mk.me.png"
                        }
                    }
                ]
            },
            funkcionalnosti: {
                title: "FUNKCIONALNOSTI",
                box: [
                    "Yamb će čuvati rezultate dok se keš memorija pregledača ne obriše.",
                    "Da biste zatvorili tastaturu, potrebno je kliknuti na polje u koje nije moguće unijeti broj.",
                    "\u00A0 Preporuka je da to bude pravougaonik ispod dugmeta za podešavanja.",
                    "Ako se rezultati ne vide odmah, potrebno je kliknuti unutar nekog polja u kojem je dozvoljen unos, a zatim izvan njega.",
                    "Pritiskom na dugme \"Nova partija\" igrač može da odabere:",
                    "\u00A0 \"Obriši sve\" kako bi započeo novu partiju i obrisao sve vrijednosti iz tabele.",
                    "\u00A0 \"Odustani\" kako bi se vratio bez brisanja vrijednosti iz tabele.",
                    "Ako igrač unese nedozvoljenu vrijednost, ona će biti obrisana i polje će postati crveno.",
                    "\u00A0 Kako bi polje ponovo postalo bijelo, potrebno je unijeti ispravnu vrijednost u njega ili samo kliknuti na obojeno polje pa kliknuti bilo gdje sa strane.",
                    "Ako igrač želi da promijeni unos, moguće je obrisati staru vrijednost i unijeti novu, pri čemu će biti upitan da li želi da zamijeniti broj ili odustati od zamjene.",
                    "\u00A0 \"Zamijeni broj\" će staru vrijednost zamijeniti novom.",
                    "\u00A0 \"Odustani\" će prekinuti izmjenu i vratiti staru vrijednost.",
                    "Prilikom unošenja broja u najavu čuće se zvuk (ako je uključen)."
                ]
            }
        }
    }
}