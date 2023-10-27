let km = parseInt(prompt("inserisci i km che desideri percorrere"))
let eta = parseInt(prompt("inserisci la tua età"))


const z = parseFloat(0.21)

const prezzo = parseFloat(km * z)

if ( eta < 18) {
    prezzoScontato = parseFloat(prezzo -(prezzo * 0.2)).toFixed(2)
    document.getElementById("message").innerHTML= prezzoScontato
} else if(eta >= 65){
    prezzoScontato = parseFloat(prezzo -(prezzo * 0.4)).toFixed(2)
    document.getElementById("message").innerHTML= prezzoScontato
} else{
    prezzoScontato = parseFloat(prezzo).toFixed(2)
    document.getElementById("message").innerHTML= prezzo
}