//Schere Stein Papier WPU
let spiel = ["Schere", "Stein", "Papier"];
let figur_wahl;
let figur_random2;

function spiel_random(array){
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

function spiel_figur_spieler() {
figur_wahl = prompt("Wähle eine Figur");
console.log("Der zufällige Name ist:", figur_wahl);
}
function spiel_figur_random() {
figur_random2 = spiel_random(spiel);
console.log("Der zufällige Name ist:", figur_random2);
}

function spiel_main() {
    if (figur_wahl === figur_random2) {
        console.log("Unentschieden");
    } else if (
    (figur_wahl === "Schere" && figur_random2 === "Papier") ||
    (figur_wahl === "Stein" && figur_random2 === "Schere") ||
    (figur_wahl === "Papier" && figur_random2 === "Stein")
    ) {
        console.log("Du hast gewonnen!");
    } else {
        console.log("Du hast verloren!")
    }
           
}
    

spiel_figur_spieler();
spiel_figur_random();
spiel_main();
