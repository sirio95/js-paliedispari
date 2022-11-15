//pari-dispari

inizio.addEventListener('click', 
    function(){

        let scommessa= prompt('scegli: pari o dispari?')
        let numUser= parseInt(prompt('Scrivi un numero da 1 a 5'));
        let numPC= Math.floor(Math.random() * 4)+ 1;
        let sommaNum= somma(numUser, numPC);
        let risultato= document.getElementById('pardis');

        console.log(numPC);
        console.log(numUser);
        
        document.getElementById('puntata').innerHTML= `Hai scommesso su ${scommessa}`;
        document.getElementById('io').innerHTML= `il tuo numero è ${numUser}`;
        document.getElementById('pc').innerHTML= `il numero del tuo avversario è ${numPC}`;
        document.getElementById('sum').innerHTML= `la somma dei due numeri è ${sommaNum}`;

        if (sommaNum % 2 === 0 && scommessa === 'pari' || sommaNum % 2 === 1 && scommessa === 'dispari'){
            risultato.innerHTML= `HAI VINTO!`
        }else{
            risultato.innerHTML= 'HAI PERSO. RITENTA!'
        }

    }
)


//somma
function somma(num1, num2){
    const sommaN= num1+num2;
    return sommaN;
}