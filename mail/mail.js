

// Chiedi all’utente la sua email,

var insert_email = prompt("Inserisci la tua mail");
console.log(insert_email);


// controlla che sia nella lista di chi può accedere, 
var mail =["anastasia@gmail.com", "mariorossi@gmail.com" , "giulia@gmail.com", "stefano@gmail.com"];
console.log(mail);
var message;

if (insert_email == mail[0]) {
    console.log(message = "utente registrato");
} else if(insert_email == mail[1]) {
    console.log(message = "utente registrato");
} else if(insert_email == mail[2]) {
    console.log(message = "utente registrato");
}else if(insert_email == mail[3]) {
    console.log(message = "utente registrato");
} else{
    console.log(message = "utente non registrato");
}


// stampa un messaggio appropriato sull’esito del controllo.
document.getElementById("email").innerHTML = message;