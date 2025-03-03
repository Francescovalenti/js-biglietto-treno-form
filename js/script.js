// raccolta dati
const datiutentiinput = document.getElementById("datiutenti");
console.log(datiutenti)
const nomeecognomeinput = document.getElementById("nomeecognome");
console.log(nomeecognome);
const etainput = document.getElementById("eta");
console.log(etainput);
const kminput = document.getElementById("km");
console.log(kminput);
const calcolainput = document.getElementById("calcola");
console.log(calcolainput);





// processo di esecuzione
datiutenti.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("submit");
    const nomeecognome = (nomeecognomeinput.value);
    console.log(nomeecognome);
    const eta = (etainput.value);
    console.log(eta);
    const km = (kminput.value);
    console.log(km);
   

    const prezzobase = 0.21;
    let prezzoTotale = km * prezzobase;


    if (eta < 18) {
        let sconto = prezzoTotale * 20 / 100;
        prezzoTotale = prezzoTotale - sconto;
    }
    else if (eta > 65) {
        let sconto = prezzoTotale * 20 / 100;
        prezzoTotale = prezzoTotale - sconto;
    }
    prezzoTotale =

        (Math.round(prezzoTotale * 100) / 100).toFixed(2);

    console.log(prezzoTotale);
    document.getElementById("prezzo").innerHTML = `  il costo del biglietto per ${nomeecognome} è di ${prezzoTotale} € `;

})

