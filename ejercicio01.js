// Suma de dos números:

// Escriba un programa en JavaScript con una función que tome como parámetros dos enteros, los sume y devuelva como resultado la suma. El programa deberá pedir al usuario los dos números, luego llamar a la función con los números leídos como argumentos y, por último, informar al usuario el valor de la suma.
const prompt = require('prompt-sync')({siging: true })
const suma = (n1, n2) => {
    return n1 + n2
}

const num1 = parseInt(prompt("Ingrese el primer número: "));
const num2 = parseInt(prompt("Ingrese el segundo número: "));

console.log(`el resultado de la suma de ${num1} y ${num2} es`, suma(num1, num2));