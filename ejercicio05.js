// Factorial de un número:
// Escriba un programa en JavaScript con una función que reciba un valor entero positivo y devuelva su factorial.

const prompt = require('prompt-sync')({ sigint: true })

const n = parseInt(prompt('Ingrese un número entero positivo: '))

const factorial = (n) => {
    if (n === 0 || n === 1) return 1


    for (let i = n - 1; i >= 1; i--){
        n *= i;
        //console.log(`factorial: `, N);
    }
    return n;
}
factorial(n)

console.log(`El factorial de ${n} es: ${factorial(n)}`)
