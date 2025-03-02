const etainput = (document.getElementById ("eta"));
const kminput =  (document.getElementById("km"));
const prezzokm = 0.21;
let prezzoTotale = km * prezzokm;


document.getElementById("calcola")
calcola.addEventListener(`Click`, function () {
    const eta= etainput.Value;
    const km= kminput.value;
    console.log(eta);
    


    if (eta <18){
        let sconto = prezzoTotale * 20  / 100;
        prezzoTotale= prezzoTotale - sconto;
    } else if (eta > 65) {
        let sconto = prezzoTotale * 40 /100;
        prezzoTotale= prezzoTotale - sconto;
    }
    prezzoTotale= 
    (Math.round (prezzototale * 100) / 100).toFixed(2)
    document.getElementById("prezzo").innerText = prezzoTotale
     document.getElementById("risultato").style.display ="block";


})
