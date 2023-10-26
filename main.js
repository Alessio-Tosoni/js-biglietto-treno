let km = parseInt(prompt("inserisci i km che desideri percorrere"))
let eta = parseInt(prompt("inserisci la tua età"))

const x = parseInt(18)
const y = parseInt(65)
const z = parseInt(0.21)

const costo = parseFloat(km * z)

if ( eta < x) {
 prezzo = parsefloat(costo -(costo * 0.2))
} 
document.getElementById("message")innerHTML = prezzo