document.getElementById('+').addEventListener('click', function() {
let number1 = Number(document.getElementById('number1').value);
let number2 = Number(document.getElementById('number2').value);
let resultat = document.getElementById('resultat').textContent= number1 + number2;
})
document.getElementById('-').addEventListener('click', function() {
let number1 = Number(document.getElementById('number1').value);
let number2 = Number(document.getElementById('number2').value);
let resultat = document.getElementById('resultat').textContent= number1 - number2;
})
document.getElementById('*').addEventListener('click', function() {
let number1 = Number(document.getElementById('number1').value);
let number2 = Number(document.getElementById('number2').value);
let resultat = document.getElementById('resultat').textContent= number1 * number2;
})
document.getElementById('/').addEventListener('click', function() {
let number1 = Number(document.getElementById('number1').value);
let number2 = Number(document.getElementById('number2').value);
if (number2 === 0){
let resultat = document.getElementById('resultat').textContent= "Impossible de diviser par zéro"}
else {let resultat = document.getElementById('resultat').textContent= number1 / number2}
})