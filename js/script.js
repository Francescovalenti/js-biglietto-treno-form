const datiutenti = document.getElementById("datiutenti");
console.log(datiutenti);
const eta = document.getElementById("eta");
console.log(eta);
const inputkm = document.getElementById("km");
console.log(km);
const risultatoElement = document.getElementById("risultato");
console.log(risultatoElement);





const prezzokm = 0.21;
let prezzoTotale = km * prezzokm;

if (isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {

}


document.getElementById("calcola")
datiutenti.addEventListener(`Click`, function () {
    ;
    console.log("datiutenti");
    // Prelevare i dati dagli inputs
    const eta = eta.value;
    const km =  km.value;
    console.log(eta,km);
    
   






    if (eta < 18) {
        let sconto = prezzoTotale * 20 / 100;
        prezzoTotale = prezzoTotale - sconto;
    } else if (eta > 65) {
        let sconto = prezzoTotale * 40 / 100;
        prezzoTotale = prezzoTotale - sconto;
    }
    prezzoTotale =
        (Math.round(prezzoTotale * 100) / 100).toFixed(2)
        console.log(prezzoTotale);


    const risultato = document.getElementById('risultato');
    document.getElementById("prezzo").innerText = `<p>Il prezzo del biglietto è: ${prezzoTotale} €</p>`;
    document.getElementById("risultato").style.display = "block";
    




})
