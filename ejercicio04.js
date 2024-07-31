// Conversión de minúscula a mayúscula:
let caracter = 'c'
// Escriba un programa en JavaScript que utilice una función que reciba un carácter como parámetro, si el carácter es una letra minúscula, modifique el parámetro para convertirlo en mayúscula.
function minMay (caracter) {
    if (caracter >= 'a' && caracter <= 'z') {
        caracter = caracter.toUpperCase()
        return caracter
    }
}
minMay()

console.log(minMay(caracter)) // 'A'