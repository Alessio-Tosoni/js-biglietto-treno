let km = parseInt(prompt("inserisci i km che desideri percorrere"))
let eta = parseInt(prompt("inserisci la tua età"))

const x = parseInt(18)
const y = parseInt(65)
const z = parseFloat(0.21)

const prezzo = parseFloat(km * z)

if ( eta < x) {
    prezzoScontato = parseFloat(prezzo -(prezzo * 0.2)).toFixed(2)
    document.getElementById("message").innerHTML= prezzoScontato
} else if(eta > 65){
    prezzoScontato = parseFloat(prezzo -(prezzo * 0.4)).toFixed(2)
    document.getElementById("message").innerHTML= prezzoScontato
} else{
    prezzoScontato = parseFloat(prezzo).toFixed(2)
    document.getElementById("message").innerHTML= prezzo
}