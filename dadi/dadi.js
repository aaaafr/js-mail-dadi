// Gioco dei dadi
// Generare un numero random da 1 a 6,
//  sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var random_player = Number(prompt("Inserire un numero da 0 a 6", (Math.floor(Math.random() * 7))));
console.log(random_player);

var random_pc = Number(Math.floor(Math.random() * 7));
console.log(random_pc);

var message;

if (random_player > random_pc) {
    message = "Hai vinto"; 
} else if(random_player < random_pc) {
    message = "Hai perso";
} else {
    message = "Pareggio";
}

console.log(message);

document.getElementById("giocatore").innerHTML = "Il numero del giocatore è " + random_player;
document.getElementById("computer").innerHTML = "Il numero del pc è " + random_pc;
document.getElementById("gioco").innerHTML = message;






