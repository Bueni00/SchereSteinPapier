//Schere Stein Papier WPU
let spiel = ["Schere", "Stein", "Papier"]; // Array für die Figuren erstellt
let figur_wahl;                                        //Globale definition der Variabel für den Spieler
let figur_random2;                                      //Globale definition der Variabel für den PC

function spiel_random(array){                                   //Funktion zum randomisen welche Figur rauskommen soll
    let index = Math.floor(Math.random() * array.length);       //mit math.random() random eine Figur aus dem Array rausgeben
    return array[index];
}

function spiel_figur_spieler() {                                //Funktion mit der, der Spieler seine Figur wählen kann
figur_wahl = prompt("Wähle eine Figur");                        //Mit prompt befehl die eingabe bestimmen
console.log("Der zufällige Name ist:", figur_wahl);
}
function spiel_figur_random() {                                 //Funktion um die random Figur für den Gegner(PC) zu bestimmen
figur_random2 = spiel_random(spiel);
console.log("Der zufällige Name ist:", figur_random2);
}

function spiel_main() {                                          //Das Main spiel mit den regeln usw
    if (figur_wahl === figur_random2) {                          // mit if/else die Spielregeln durchgesetzt, hier wenn die Spielerfigur = Pc figur dann unentschieden
        console.log("Unentschieden");                              
    } else if (                                                 
    (figur_wahl === "Schere" && figur_random2 === "Papier") ||     //Hier die definitionen der Regeln um zu gewinnen
    (figur_wahl === "Stein" && figur_random2 === "Schere") ||
    (figur_wahl === "Papier" && figur_random2 === "Stein")
    ) {
        console.log("Du hast gewonnen!");
    } else {
        console.log("Du hast verloren!")                        //Sollte keins von oben zutreffen, hat der Spieler verloren.
    }
           
}
    

spiel_figur_spieler();
spiel_figur_random();
spiel_main();
