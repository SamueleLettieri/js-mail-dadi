/* PROGRAMMA PER VERIFICARE L'EMAIL */

/* let email = ["pippo1@gmail.com", "pippo2@gmail.com", "pippo3@gmail.com", "pippo4@gmail.com", "pippo5@gmail.com", "pippo6@gmail.com", "pippo7@gmail.com", "pippo8@gmail.com", "pippo9@gmail.com", "pippo10@gmail.com", "pippo11@gmail.com", "pippo12@gmail.com", "pippo13@gmail.com", "pippo14@gmail.com", "pippo15@gmail.com"];
console.log(email)

const userEmail = prompt("iserisci la tua email");
console.log(userEmail);

let emailFaund = "dopo un atento controllo, l'email inserita non è stata accetata";

for (let i = 0; i < email.length; i++){
    let allEmail = email[i];
    console.log(allEmail)

    if ( userEmail === allEmail ){
        emailFaund = "email ferificata, puoi accedere";
    }
}

alert(emailFaund); */





/* PROGRAMMA PER GIOCARE A DADI */

const userDice = parseInt(Math.random() * 5)+1;
console.log(userDice)

let message

const  aiDice = parseInt(Math.random() * 5)+1;
console.log(aiDice)

if(userDice > aiDice){
    message = "Congratulazioni hai vinto! :)";
    console.log(message);
} else if(userDice < aiDice){
    message = "Spiacente ha vinto il computer, ri tenta ;)";
    console.log(message);
} else if(userDice == aiDice){
    message = "Che peccato, e finita in pareggio :(";
    console.log(message);
}