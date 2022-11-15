
inizio.addEventListener('click', 
    function(){
        let palindromo= false; 
        let word= prompt('digita una parola');

        while(palindromo == false){ 
            if(word === reverseString(word)){   
                palindromo= true;
                document.getElementById('pal').innerHTML= `la tua parola, ${word} &egrave; un palindromo!`
            }else{
                word= prompt(`mi dispiace, ma ${word} non è un palindromo. Ritenta!`)
            }
                
        }
    }                           
)










//funzioni
function reverseString(str){
    let split= str.split('');
    const reverseArr= split.reverse();
    let join= reverseArr.join(''); 

    return join;
}