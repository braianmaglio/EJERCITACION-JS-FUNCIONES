// Mayor de tres números:
// Cree una función en JavaScript llamada MayorDeTres, que reciba tres números enteros y devuelva el valor del mayor de ellos. Por ejemplo, para los números 5, 7 y 5, devolvería el valor 7.
const MayorDeTres = (a, b, c) =>{
    if (a > b && a > c) {
        console.log(a) 
    } else if(b > a && b > c){
        console.log(b);
    } else if(c > a && c > b){
        console.log(c);
    }
}
MayorDeTres(5, 7, 15)