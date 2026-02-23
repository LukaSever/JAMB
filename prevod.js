const prevod = {
    sr: {
        ui: {
            nova_partija: "Nova partija",
            obrisi_sve: "Obriši sve",
            vrati_se: "Vrati se",
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
                    "\"N\" kolona se naziva najava. Prilikom prvog bacanja igrač odlučuje da li će nešto najaviti, shodno dobijenim kockicama. Ukoliko se odluči da najavi, mora odmah da kaže protivniku šta najavljuje. Te kockice odvaja sa strane i tek onda može da baca još dva puta ostale kockice.",
                    "\"R\" kolona se naziva ručna kolona i u nju se upisuje zbir kockica dobijen pri prvom bacanju.",
                    "\u00A0 Preporuka je da se u prvih 6 redova upiše odmah kada se dobiju 3 ista broja pri prvom bacanju.",
                    "\"D\" kolona se naziva dojava (odjava) i popunjava se nakon najave protivnika.",
                    "\u00A0 PR: Ako je protivnik najavio šestice, sledeći igrač baca 3 puta i odvaja sve šestice koje dobije. (Moguće je da ne dobije nijednu šesticu i u tom slučaju upisuje 0 u predviđeno polje.)",
                    "\"O\" kolona se popunjava na samom kraju partije. Redosled popunjavanja je odozgo prema dole.",
                    "\"M\" kolona automatski ažurira najveće brojeve iz svakog reda.",
                    "U žutim poljima se automatski računa zbir po sledećim pravilima:",
                    "\u00A0 Prva suma računa prvih 6 redova. Ovde je važno da zbir u koloni premaši 60 kako bi se dobilo dodatnih 30 poena.",
                    "\u00A0 Druga suma računa razliku MAX i MIN kolone i množi je sa brojem jedinica te kolone.",
                    "\u00A0 Treća suma samo računa zbir kolona bez dodavanja."
                ]
            },
            nacin_racunanja: {
                title: "NAČIN RAČUNANJA",
                box: [
                    "Kolona 1: Zbir jedinica",
                    "Kolona 2: Zbir dvojki",
                    "Kolona 3: Zbir trojki",
                    "Kolona 4: Zbir četvorki",
                    "Kolona 5: Zbir petica",
                    "Kolona 6: Zbir šestica",
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
                    "Red 1: Odozgo na dole",
                    "Red 2: Proizvoljnim redosledom",
                    "Red 3: Odozdo na gore",
                    "Red 4: Proizvoljnim redosledom",
                    "Red 5: Proizvoljnim redosledom",
                    "Red 6: Proizvoljnim redosledom",
                    "Red 7: Od MAX na gore, od MIN na dole",
                    "Red 8: Odozgo do MAX, odozdo do MIN",
                    "Red 9: Odozgo na dole",
                    "Red 10: Ne popunjava se",
                    {
                        link: {
                            text: "Slika dozvoljenih vrednosti po kolonama",
                            href: "static/images/explanations/YAMB2.sr.bs.mk.me.png"
                        }
                    },
                ],
            },
            dozvoljene_vrednosti: {
                title: "DOZVOLJENE VREDNOSTI",
                box: [
                    "Kolona 1: 0, 1, 2, 3, 4, 5",
                    "Kolona 2: 0, 2, 4, 6, 8, 10",
                    "Kolona 3: 0, 3, 6, 9, 12, 15",
                    "Kolona 4: 0, 4, 8, 12, 16, 20",
                    "Kolona 5: 0, 5, 10, 15, 20, 25",
                    "Kolona 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Slika dozvoljenih vrednosti po kolonama",
                            href: "static/images/explanations/YAMB1.sr.bs.mk.me.png"
                        }
                    },
                ],
            },
            funkcionalnosti: {
                title: "FUNKCIONALNOSTI",
                box: [
                    "Pritiskom na dugme \"Nova partija\" igrač može da odabere:",
                    "\u00A0 \"Obriši sve\" kako bi započeo novu partiju i obrisao sve vrednosti iz tabele.",
                    "\u00A0 \"Vrati se\" kako bi se vratio bez brisanja vrednosti iz tabele.",
                    "Ukoliko je igrač uneo pogrešan broj ili iz nekog razloga želi da promeni unos, moguće je obrisati staru vrednost i upisati novu, pri čemu će biti upitan da li želi da zameni broj ili odustaje od zamene.",
                    "\u00A0 \"Zameni broj\" će staru vrednost zameniti novom.",
                    "\u00A0 \"Vrati se\" će prekinuti izmenu i vratiti staru vrednost."
                ]
            }
        }
    },
    en: {
        ui: {
            nova_partija: "New game",
            obrisi_sve: "Clear all",
            vrati_se: "Return",
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
                    "The player has the right to throw 3 times.",
                    "\u00A0 Except when filling in the manual column, where the player can only throw once.",
                    "After each throw, the player separates the dice that match and rethrows the rest.",
                    "At the end of the third throw, the player separates the 5 dice that match the best and records their sum."
                ]
            },
            objasnjenja_kolona: {
                title: "COLUMN EXPLANATIONS",
                box: [
                    "The second column is called the free column and can be filled in any order.",
                    "\"N\" column is the announcement. During the first throw, the player decides whether to announce something based on the dice they rolled. If they decide to announce, they must immediately tell the opponent what they are announcing. Those dice are separated, and only then can they throw the remaining dice two more times.",
                    "\"R\" column is the manual column where the sum of the dice from the first throw is recorded.",
                    "\u00A0 It is recommended to fill in the first 6 rows immediately if 3 identical numbers appear in the first throw.",
                    "\"D\" column is called the declaration (opposite) and is filled after the opponent's announcement.",
                    "\u00A0 For example: If the opponent announces sixes, the next player throws 3 times and separates all the sixes they get. (It is possible that they do not get any sixes, in which case they write 0 in the designated field.)",
                    "\"O\" column is filled at the very end of the game. The filling order is from top to bottom.",
                    "\"M\" column automatically updates the highest numbers from each row.",
                    "In yellow fields, the sum is automatically calculated according to the following rules:",
                    "\u00A0 The first sum calculates the first 6 rows. Here, it is important that the column sum exceeds 60 to receive an additional 30 points.",
                    "\u00A0 The second sum calculates the difference between the MAX and MIN columns and multiplies it by the number of ones in that column.",
                    "\u00A0 The third sum simply calculates the total of the columns without adding anything."
                ]
            },
            nacin_racunanja: {
                title: "SCORING METHOD",
                box: [
                    "Column 1: Sum of ones",
                    "Column 2: Sum of twos",
                    "Column 3: Sum of threes",
                    "Column 4: Sum of fours",
                    "Column 5: Sum of fives",
                    "Column 6: Sum of sixes",
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
                    "Row 1: Top to bottom",
                    "Row 2: In any order",
                    "Row 3: Bottom to top",
                    "Row 4: In any order",
                    "Row 5: In any order",
                    "Row 6: In any order",
                    "Row 7: From MAX to top, from MIN to bottom",
                    "Row 8: From top to MAX, from bottom to MIN",
                    "Row 9: Top to bottom",
                    "Row 10: Not filled",
                    {
                        link: {
                            text: "Allowed values per column",
                            href: "static/images/explanations/YAMB2.en.png"
                        }
                    },
                ],
            },
            dozvoljene_vrednosti: {
                title: "ALLOWED VALUES",
                box: [
                    "Column 1: 0, 1, 2, 3, 4, 5",
                    "Column 2: 0, 2, 4, 6, 8, 10",
                    "Column 3: 0, 3, 6, 9, 12, 15",
                    "Column 4: 0, 4, 8, 12, 16, 20",
                    "Column 5: 0, 5, 10, 15, 20, 25",
                    "Column 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Allowed values per column",
                            href: "static/images/explanations/YAMB1.en.png"
                        }
                    },
                ],
            },
            funkcionalnosti: {
                title: "FUNCTIONALITIES",
                box: [
                    "By clicking the \"New Game\" button, the player can choose:",
                    "\u00A0 \"Delete All\" to start a new game and delete all values from the table.",
                    "\u00A0 \"Go Back\" to return without deleting values from the table.",
                    "If the player entered the wrong number or wants to change an entry for any reason, they can delete the old value and enter a new one, and they will be asked whether they want to replace the number or cancel the change.",
                    "\u00A0 \"Replace Number\" will replace the old value with the new one.",
                    "\u00A0 \"Go Back\" will cancel the change and keep the old value."
                ]
            }
        }
    },
    hr: {
        ui: {
            nova_partija: "Nova igra",
            obrisi_sve: "Obriši sve",
            vrati_se: "Vrati se",
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
                    "\u00A0 Treći zbroj samo računa zbroj kolona bez dodavanja."
                ]
            },
            nacin_racunanja: {
                title: "NAČIN RAČUNANJA",
                box: [
                    "Kolona 1: Zbroj jedinica",
                    "Kolona 2: Zbroj dvojki",
                    "Kolona 3: Zbroj trojki",
                    "Kolona 4: Zbroj četvorki",
                    "Kolona 5: Zbroj petica",
                    "Kolona 6: Zbroj šestica",
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
                    "Red 1: Odozgo na dolje",
                    "Red 2: Proizvoljnim redoslijedom",
                    "Red 3: Odozdo na gore",
                    "Red 4: Proizvoljnim redoslijedom",
                    "Red 5: Proizvoljnim redoslijedom",
                    "Red 6: Proizvoljnim redoslijedom",
                    "Red 7: Od MAX na gore, od MIN na dolje",
                    "Red 8: Odozgo do MAX, odozdo do MIN",
                    "Red 9: Odozgo na dolje",
                    "Red 10: Ne popunjava se",
                    {
                        link: {
                            text: "Slika dozvoljenih vrijednosti po kolonama",
                            href: "static/images/explanations/YAMB2.hr.sl.png"
                        }
                    },
                ],
            },
            dozvoljene_vrednosti: {
                title: "DOZVOLJENE VRIJEDNOSTI",
                box: [
                    "Kolona 1: 0, 1, 2, 3, 4, 5",
                    "Kolona 2: 0, 2, 4, 6, 8, 10",
                    "Kolona 3: 0, 3, 6, 9, 12, 15",
                    "Kolona 4: 0, 4, 8, 12, 16, 20",
                    "Kolona 5: 0, 5, 10, 15, 20, 25",
                    "Kolona 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Slika dozvoljenih vrijednosti po kolonama",
                            href: "static/images/explanations/YAMB1.hr.sl.png"
                        }
                    },
                ],
            },
            funkcionalnosti: {
                title: "FUNKCIONALNOSTI",
                box: [
                    "Pritiskom na dugme \"Nova partija\" igrač može odabrati:",
                    "\u00A0 \"Obriši sve\" kako bi započeo novu igru i obrisao sve vrijednosti iz tablice.",
                    "\u00A0 \"Vrati se\" kako bi se vratio bez brisanja vrijednosti iz tablice.",
                    "Ako je igrač unio pogrešan broj ili želi promijeniti unos iz nekog razloga, može obrisati staru vrijednost i unijeti novu, pri čemu će biti upitan želi li zamijeniti broj ili odustati od zamjene.",
                    "\u00A0 \"Zamijeni broj\" će zamijeniti staru vrijednost s novom.",
                    "\u00A0 \"Vrati se\" će prekinuti izmjenu i vratiti staru vrijednost."
                ]
            }
        }
    },
    bs: {
        ui: {
            nova_partija: "Nova partija",
            obrisi_sve: "Obriši sve",
            vrati_se: "Vrati se",
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
                    "\u00A0 Treći zbroj samo računa zbroj kolona bez dodavanja."
                ]
            },
            nacin_racunanja: {
                title: "NAČIN RAČUNANJA",
                box: [
                    "Kolona 1: Zbroj jedinica",
                    "Kolona 2: Zbroj dvojki",
                    "Kolona 3: Zbroj trojki",
                    "Kolona 4: Zbroj četvorki",
                    "Kolona 5: Zbroj petica",
                    "Kolona 6: Zbroj šestica",
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
                    "Red 1: Odozgo na dolje",
                    "Red 2: Proizvoljnim redoslijedom",
                    "Red 3: Odozdo na gore",
                    "Red 4: Proizvoljnim redoslijedom",
                    "Red 5: Proizvoljnim redoslijedom",
                    "Red 6: Proizvoljnim redoslijedom",
                    "Red 7: Od MAX na gore, od MIN na dolje",
                    "Red 8: Odozgo do MAX, odozdo do MIN",
                    "Red 9: Odozgo na dolje",
                    "Red 10: Ne popunjava se",
                    {
                        link: {
                            text: "Slika dozvoljenih vrijednosti po kolonama",
                            href: "static/images/explanations/YAMB2.sr.bs.mk.me.png"
                        }
                    },
                ],
            },
            dozvoljene_vrednosti: {
                title: "DOZVOLJENE VRIJEDNOSTI",
                box: [
                    "Kolona 1: 0, 1, 2, 3, 4, 5",
                    "Kolona 2: 0, 2, 4, 6, 8, 10",
                    "Kolona 3: 0, 3, 6, 9, 12, 15",
                    "Kolona 4: 0, 4, 8, 12, 16, 20",
                    "Kolona 5: 0, 5, 10, 15, 20, 25",
                    "Kolona 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Slika dozvoljenih vrijednosti po kolonama",
                            href: "static/images/explanations/YAMB1.sr.bs.mk.me.png"
                        }
                    },
                ],
            },
            funkcionalnosti: {
                title: "FUNKCIONALNOSTI",
                box: [
                    "Pritiskom na dugme \"Nova partija\" igrač može odabrati:",
                    "\u00A0 \"Obriši sve\" kako bi započeo novu igru i obrisao sve vrijednosti iz tablice.",
                    "\u00A0 \"Vrati se\" kako bi se vratio bez brisanja vrijednosti iz tablice.",
                    "Ako je igrač unio pogrešan broj ili želi promijeniti unos iz nekog razloga, može obrisati staru vrijednost i unijeti novu, pri čemu će biti upitan želi li zamijeniti broj ili odustati od zamjene.",
                    "\u00A0 \"Zamijeni broj\" će zamijeniti staru vrijednost s novom.",
                    "\u00A0 \"Vrati se\" će prekinuti izmjenu i vratiti staru vrijednost."
                ]
            }
        }
    },
    mk: {
        ui: {
            nova_partija: "Nova partija",
            obrisi_sve: "Izbriši sè",
            vrati_se: "Vrati se",
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
                title: "OPSHTI PRAVILA",
                button_title: "Opshti",
                box: [
                    "Za igrata se potrebni 6 kockici.",
                    "Igrachot ima pravo da frli 3 pati.",
                    "\u00A0 Osven koga ja popolnuva rachnata kolona, togash sme da frli samo eden pat.",
                    "Pri sekoe frlanje gi odvojuva kockicite shto mu odgovaraat, a ostanatite gi frla povtorno.",
                    "Na krajot od tretoto frlanje gi odvojuva 5 kockici shto mu najmnogu odgovaraat i nivniot zbir go zapishuva vo pole."
                ]
            },
            objasnjenja_kolona: {
                title: "OBJASNENJA KOLONA",
                box: [
                    "Vtorata kolona se narekuva slobodna kolona i mozhe da se popolnuva proizvolen redosled.",
                    "\"N\" kolona se narekuva najava. Pri prvoto frlanje igrachot odluchuva dali ke najavi neshto, spored dobienite kockici. Ako odluchi da najavi, mora vednash da mu kaze na protivnikot shto najavuva. Tie kockici gi odvojuva na strana i samo togash mozhe da gi frli ostanatite kockici uste dva pati.",
                    "\"R\" kolona se narekuva rachna kolona i vo nea se zapishuva zbir na kockicite dobieni pri prvoto frlanje.",
                    "\u00A0 Preporaka e da se zapishe vo prvite 6 redovi vednash koga ke se dobijat 3 isti broevi pri prvoto frlanje.",
                    "\"D\" kolona se narekuva dojavi (odjavi) i se popolnuva po najavata na protivnikot.",
                    "\u00A0 PR: Ako protivnikot najavi shestici, sledniot igrach frla 3 pati i gi odvojuva site shestici shto ke gi dobije. (Mozhno e da ne dobije nitu edna shestica, i vo toj sluchaj zapishuva 0 vo predvidenoto pole.)",
                    "\"O\" kolona se popolnuva na samiot kraj od igrata. Redosledot na popolnuvanje e odgore nadole.",
                    "\"M\" kolona avtomatski gi azhurira najgolemite broevi od sekoj red.",
                    "Vo zholti polinja avtomatski se presmetuva zbir spored slednite pravila:",
                    "\u00A0 Prviot zbir gi presmetuva prvite 6 redovi. Vazno e zbir vo kolonata da nadmine 60 za da se dobijat dopolnitelni 30 poeni.",
                    "\u00A0 Vtoriot zbir ja presmetuva razlikata pomegju MAX i MIN kolona i ja mnozhi so brojot na kecovi vo taa kolona.",
                    "\u00A0 Tretiot zbir samo go presmetuva zbir na kolonite bez dodavanje."
                ]
            },
            nacin_racunanja: {
                title: "NACHIN NA PRESMETUVANJE",
                box: [
                    "Kolona 1: Zbir na edinici",
                    "Kolona 2: Zbir na dvojki",
                    "Kolona 3: Zbir na trojki",
                    "Kolona 4: Zbir na chetvorki",
                    "Kolona 5: Zbir na petici",
                    "Kolona 6: Zbir na shestici",
                    "MAX: Zbir na 5 kockici so najgolemi broevi",
                    "MIN: Zbir na 5 kockici so najmali broevi",
                    "KENTA:",
                    "\u00A0 Ako e dobiена od prvo frlanje se zapishuva 66",
                    "\u00A0 Ako e dobiена od vtoro frlanje se zapishuva 56",
                    "\u00A0 Ako e dobiена od tretoto frlanje se zapishuva 46",
                    "TRILING: Zbir na 3 isti kockici +30",
                    "FUL: Zbir na 2 isti i 3 isti kockici +30",
                    "POKER: Zbir na 4 isti kockici +40",
                    "YAMB: Zbir na 5 isti kockici +50"
                ]
            },
            smer_popunjavanja: {
                title: "SMER NA POPOLNUVANJE",
                box: [
                    "Red 1: Odgore nadole",
                    "Red 2: Proizvolen redosled",
                    "Red 3: Odzdole nagore",
                    "Red 4: Proizvolen redosled",
                    "Red 5: Proizvolen redosled",
                    "Red 6: Proizvolen redosled",
                    "Red 7: Od MAX nagore, od MIN nadolu",
                    "Red 8: Odgore do MAX, odzdole do MIN",
                    "Red 9: Odgore nadole",
                    "Red 10: Ne se popolnuva",
                    {
                        link: {
                            text: "Slika dozvolenih vrednosti po kolonite",
                            href: "static/images/explanations/YAMB2.sr.bs.mk.me.png"
                        }
                    }
                ]
            },
            dozvoljene_vrednosti: {
                title: "DOZVOLENI VREDNOSTI",
                box: [
                    "Kolona 1: 0, 1, 2, 3, 4, 5",
                    "Kolona 2: 0, 2, 4, 6, 8, 10",
                    "Kolona 3: 0, 3, 6, 9, 12, 15",
                    "Kolona 4: 0, 4, 8, 12, 16, 20",
                    "Kolona 5: 0, 5, 10, 15, 20, 25",
                    "Kolona 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Slika dozvolenih vrednosti po kolonite",
                            href: "static/images/explanations/YAMB1.sr.bs.mk.me.png"
                        }
                    }
                ]
            },
            funkcionalnosti: {
                title: "FUNKCIONALNOSTI",
                box: [
                    "So pritisk na kopcheto \"Nova partija\" igrachot mozhe da odabere:",
                    "\u00A0 \"Izbrishi se\" za da zapochne nova partija i da gi izbrishi site vrednosti od tabelata.",
                    "\u00A0 \"Vrati se\" za da se vrati bez da gi izbrishi vrednostite od tabelata.",
                    "Ako igrachot vnese pogreshen broj ili saka da go promeni vnesot od nekoi razlog, mozhe da ja izbrishi starata vrednost i da vnese nova, pri shto ke bide prasano dali saka da go zameni brojot ili da se otkazhe od zamena.",
                    "\u00A0 \"Zameni broj\" ke ja zameni starata vrednost so nova.",
                    "\u00A0 \"Vrati se\" ke ja prekinе izmenata i ke ja vrati starata vrednost."
                ]
            }
        }
    },
    sl: {
        ui: {
            nova_partija: "Nova igra",
            obrisi_sve: "Izbriši vse",
            vrati_se: "Vrni se",
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
                    "\u00A0 Tretja vsota samo izračuna vsoto kolone brez dodatkov."
                ]
            },
            nacin_racunanja: {
                title: "NAČIN IZRAČUNA",
                box: [
                    "Kolona 1: Vsota enic",
                    "Kolona 2: Vsota dvojk",
                    "Kolona 3: Vsota trojk",
                    "Kolona 4: Vsota štiric",
                    "Kolona 5: Vsota petic",
                    "Kolona 6: Vsota šestic",
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
                    "Vrsta 1: Od zgoraj navzdol",
                    "Vrsta 2: Po poljubnem vrstnem redu",
                    "Vrsta 3: Od spodaj navzgor",
                    "Vrsta 4: Po poljubnem vrstnem redu",
                    "Vrsta 5: Po poljubnem vrstnem redu",
                    "Vrsta 6: Po poljubnem vrstnem redu",
                    "Vrsta 7: Od MAX navzgor, od MIN navzdol",
                    "Vrsta 8: Od zgoraj do MAX, od spodaj do MIN",
                    "Vrsta 9: Od zgoraj navzdol",
                    "Vrsta 10: Ne izpolni se",
                    {
                        link: {
                            text: "Slika dovoljenih vrednosti po kolonah",
                            href: "static/images/explanations/YAMB2.hr.sl.png"
                        }
                    }
                ]
            },
            dozvoljene_vrednosti: {
                title: "DOVOLJENE VREDNOSTI",
                box: [
                    "Kolona 1: 0, 1, 2, 3, 4, 5",
                    "Kolona 2: 0, 2, 4, 6, 8, 10",
                    "Kolona 3: 0, 3, 6, 9, 12, 15",
                    "Kolona 4: 0, 4, 8, 12, 16, 20",
                    "Kolona 5: 0, 5, 10, 15, 20, 25",
                    "Kolona 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Slika dovoljenih vrednosti po kolonah",
                            href: "static/images/explanations/YAMB1.hr.sl.png"
                        }
                    }
                ]
            },
            funkcionalnosti: {
                title: "FUNKCIONALNOSTI",
                box: [
                    "S pritiskom na gumb \"Nova igra\" lahko igralec izbere:",
                    "\u00A0 \"Izbriši vse\" za začetek nove igre in izbris vseh vrednosti v tabeli.",
                    "\u00A0 \"Vrni se\" za vrnitev brez brisanja vrednosti iz tabele.",
                    "Če igralec vnese napačno številko ali želi iz kakršnegakoli razloga spremeniti vnos, lahko izbriše staro vrednost in vnese novo, pri čemer ga sistem vpraša, ali želi zamenjati številko ali preklicati spremembo.",
                    "\u00A0 \"Zamenjaj številko\" bo staro vrednost zamenjalo z novo.",
                    "\u00A0 \"Vrni se\" bo prekinilo spremembo in vrnilo staro vrednost."
                ]
            }
        }
    },
    me: {
        ui: {
            nova_partija: "Nova partija",
            obrisi_sve: "Obriši sve",
            vrati_se: "Vrati se",
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
                    "\"N\" kolona se naziva najava. Prilikom prvog bacanja igrač odlučuje da li će nešto najaviti, shodno dobijenim kockicama. Ukoliko se odluči da najavi, mora odmah da kaže protivniku što najavljuje. Te kockice odvaja sa strane i tek onda može da baca još dva puta ostale kockice.",
                    "\"R\" kolona se naziva ručna kolona i u nju se upisuje zbir kockica dobijen pri prvom bacanju.",
                    "\u00A0 Preporuka je da se u prvih 6 redova upiše odmah kada se dobiju 3 ista broja pri prvom bacanju.",
                    "\"D\" kolona se naziva dojava (odjava) i popunjava se nakon najave protivnika.",
                    "\u00A0 PR: Ako je protivnik najavio šestice, sljedeći igrač baca 3 puta i odvaja sve šestice koje dobije. (Moguće je da ne dobije nijednu šesticu i u tom slučaju upisuje 0 u predviđeno polje.)",
                    "\"O\" kolona se popunjava na samom kraju partije. Redosled popunjavanja je odozgo prema dolje.",
                    "\"M\" kolona automatski ažurira najveće brojeve iz svakog reda.",
                    "U žutim poljima se automatski računa zbir po sljedećim pravilima:",
                    "\u00A0 Prva suma računa prvih 6 redova. Ovdje je važno da zbir u koloni premaši 60 kako bi se dobilo dodatnih 30 poena.",
                    "\u00A0 Druga suma računa razliku MAX i MIN kolone i množi je sa brojem jedinica te kolone.",
                    "\u00A0 Treća suma samo računa zbir kolona bez dodavanja."
                ]
            },
            nacin_racunanja: {
                title: "NAČIN RAČUNANJA",
                box: [
                    "Kolona 1: Zbir jedinica",
                    "Kolona 2: Zbir dvojki",
                    "Kolona 3: Zbir trojki",
                    "Kolona 4: Zbir četvorki",
                    "Kolona 5: Zbir petica",
                    "Kolona 6: Zbir šestica",
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
                    "Red 1: Odozgo na dolje",
                    "Red 2: Proizvoljnim redosledom",
                    "Red 3: Odozdo na gore",
                    "Red 4: Proizvoljnim redosledom",
                    "Red 5: Proizvoljnim redosledom",
                    "Red 6: Proizvoljnim redosledom",
                    "Red 7: Od MAX na gore, od MIN na dolje",
                    "Red 8: Odozgo do MAX, odozdo do MIN",
                    "Red 9: Odozgo na dolje",
                    "Red 10: Ne popunjava se",
                    {
                        link: {
                            text: "Slika dozvoljenih vrijednosti po kolonama",
                            href: "static/images/explanations/YAMB2.sr.bs.mk.me.png"
                        }
                    }
                ]
            },
            dozvoljene_vrednosti: {
                title: "DOZVOLJENE VRIJEDNOSTI",
                box: [
                    "Kolona 1: 0, 1, 2, 3, 4, 5",
                    "Kolona 2: 0, 2, 4, 6, 8, 10",
                    "Kolona 3: 0, 3, 6, 9, 12, 15",
                    "Kolona 4: 0, 4, 8, 12, 16, 20",
                    "Kolona 5: 0, 5, 10, 15, 20, 25",
                    "Kolona 6: 0, 6, 12, 18, 24, 30",
                    "MAX: 5 - 30",
                    "MIN: 5 - 30",
                    "KENTA: 0, 46, 56, 66",
                    "TRILING: 0, 33, 36, 39, 42, 45, 48",
                    "FUL: 0, 37 - 58",
                    "POKER: 0, 44, 48, 52, 56, 60, 64",
                    "YAMB: 0, 55, 60, 65, 70, 75, 80",
                    {
                        link: {
                            text: "Slika dozvoljenih vrijednosti po kolonama",
                            href: "static/images/explanations/YAMB1.sr.bs.mk.me.png"
                        }
                    }
                ]
            },
            funkcionalnosti: {
                title: "FUNKCIONALNOSTI",
                box: [
                    "Pritiskom na dugme \"Nova partija\" igrač može da odabere:",
                    "\u00A0 \"Obriši sve\" kako bi započeo novu partiju i obrisao sve vrijednosti iz tabele.",
                    "\u00A0 \"Vrati se\" kako bi se vratio bez brisanja vrijednosti iz tabele.",
                    "Ukoliko je igrač unio pogrešan broj ili iz nekog razloga želi da promijeni unos, moguće je obrisati staru vrijednost i upisati novu, pri čemu će biti upitan da li želi da zamijeni broj ili odustaje od zamjene.",
                    "\u00A0 \"Zamijeni broj\" će staru vrijednost zamijeniti novom.",
                    "\u00A0 \"Vrati se\" će prekinuti izmjenu i vratiti staru vrijednost."
                ]
            }
        }
    }
}