const datiutenti = document.getElementById("datiutenti");
console.log(datiutenti);
const inputetastr = (document.getElementById("inputeta"));
const inputkmstr = (document.getElementById("inputkm"));
let km = parseInt(inputkmstr);
let eta = parseInt(inputetastr);
const prezzokm = 0.21;
let prezzoTotale = inputkm * prezzokm;
console.log(inputetastr, inputkmstr);


document.getElementById("calcola").addEventListener(`Click`, function () {
    const inputeta = inputeta.Value;
    const inputkm = inputkm.value;
   

    if (isNaN(km) || isNaN(age) || km <= 0 || age <= 0) {
        alert("Per favore, inserisci valori validi per chilometri ed età.");
        return;
    }



    if (eta < 18) {
        let sconto = prezzoTotale * 20 / 100;
        prezzoTotale = prezzoTotale - sconto;
    } else if (eta > 65) {
        let sconto = prezzoTotale * 40 / 100;
        prezzoTotale = prezzoTotale - sconto;
    }
    prezzoTotale =
        (Math.round(prezzototale * 100) / 100).toFixed(2)
    

    const risultato = document.getElementById('risultato');
    document.getElementById("prezzo").innerText = prezzoTotale;
    document.getElementById("risultato").style.display = "block";
    console.log(prezzoTotale);
   



})
