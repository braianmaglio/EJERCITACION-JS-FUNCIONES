// Suma con tercer argumento:
// Escriba un programa en JavaScript similar al anterior, pero esta vez utilizando una función que tome un tercer argumento y coloque el resultado de la suma en dicho parámetro.
const prompt = require('prompt-sync')({siging: true })

const suma = (n1, n2, n3) => {
    n3 = n1 + n2
    return n3
}

const num1 = parseInt(prompt("Ingrese el primer número: "))
const num2 = parseInt(prompt("Ingrese el segundo número: "))
let resultado = 0

console.log(`el resultado de la suma de ${num1} y ${num2} es`, suma(num1, num2, resultado) )