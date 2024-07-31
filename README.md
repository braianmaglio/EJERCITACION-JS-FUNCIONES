# Ejercitacion JS Funciones

Este repositorio contiene una serie de ejercicios de práctica para resolver en el lenguaje JavaScript, enfocados en el uso de funciones.

## Cómo usar este repositorio

Para trabajar con este repositorio, sigue los siguientes pasos:

### 1. Forkea este repositorio

Haz clic en el botón "Fork" en la esquina superior derecha de la página del repositorio en GitHub para crear una copia de este repositorio en tu propia cuenta de GitHub.

### 2. Clona el repositorio forked

Clona tu copia del repositorio a tu máquina local usando el siguiente comando en tu terminal o consola:

```bash
git clone https://github.com/TU_USUARIO/Ejercitacion-JS-Funciones.git
code Ejercitacion-JS-Funciones
```

Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

### 3. Resuelve los ejercicios

Dentro del repositorio clonado, encontrarás archivos `.js` correspondientes a cada uno de los ejercicios descritos en este archivo README. Abre los archivos en tu editor de código preferido y resuelve cada ejercicio según se indica.

### Ejercicios

1. **Suma de dos números**: Escriba un programa en JavaScript con una función que tome como parámetros dos enteros, los sume y devuelva como resultado la suma. El programa deberá pedir al usuario los dos números, luego llamar a la función con los números leídos como argumentos y, por último, informar al usuario el valor de la suma.

2. **Suma con tercer argumento**: Escriba un programa en JavaScript similar al anterior, pero esta vez utilizando una función que tome un tercer argumento y coloque el resultado de la suma en dicho parámetro.

3. **Función F(X, Y)**: Haga un programa en JavaScript que llame a la función F(X, Y) = 5.6 * X + Y / 2.5 y que muestre los resultados para F(3, 5); F(9, 2) y F(56, 87).

4. **Conversión de minúscula a mayúscula**: Escriba un programa en JavaScript que utilice una función que reciba un carácter como parámetro, si el carácter es una letra minúscula, modifique el parámetro para convertirlo en mayúscula.

5. **Factorial de un número**: Escriba un programa en JavaScript con una función que reciba un valor entero positivo y devuelva su factorial.

6. **Mayor de tres números**: Cree una función en JavaScript llamada `MayorDeTres`, que reciba tres números enteros y devuelva el valor del mayor de ellos. Por ejemplo, para los números 5, 7 y 5, devolvería el valor 7.

7. **Ordenar tres números**: Diseñe un algoritmo en JavaScript que ordene tres números A, B, C en forma ascendente utilizando una función llamada `menorMayor` que tenga dos parámetros pasados por referencia y devuelva en el primer parámetro el valor menor y en el segundo el valor mayor.

8. **Operaciones sobre un número**: Escriba un programa en JavaScript que permita introducir un número por teclado y sobre él se realicen las siguientes operaciones: mostrar la cantidad de divisores, hallar su factorial, comprobar si es primo e imprimir su tabla de multiplicar.

9. **Módulos variados**: Realice un programa en JavaScript que incluya los siguientes módulos:
   - `Menú`: tiene un parámetro entero pasado por referencia que devuelve una opción.
   - `Bienvenida`: sin parámetros que muestra un mensaje de bienvenida.
   - `Resto`: acepta dos parámetros enteros y devuelve un número entero que es el resto de la división entera del primer parámetro sobre el segundo parámetro (sin utilizar el operador MOD).
   - `EsPar`: devuelve el valor lógico "verdadero" o "falso" según si el número que se indique como parámetro es par o no.
   - `NumeroACadena`: acepta un parámetro entero número entre 0 y 10, y devuelve una cadena de caracteres que representa el número en letras.
   - `Intercambio`: acepta dos parámetros pasados por referencia que intercambian los valores de los parámetros.
   - Pida al usuario dos números y muestre la "distancia" entre ellos (el valor absoluto de su diferencia, de modo que el resultado sea siempre positivo).

10. **Sucesión de Fibonacci**: Diseñe un algoritmo en JavaScript que permita mediante un menú de opciones:
    - Ingresar un número y obtener su correspondiente valor en la sucesión de Fibonacci.
    - Solicitar un número y determinar si pertenece a la sucesión de Fibonacci mediante la devolución de un valor lógico.

11. **Potencia mediante multiplicaciones sucesivas**: Escriba una función en JavaScript llamada `PMS` que reciba dos parámetros: B (base) y A (exponente). Calcule B elevado a A mediante multiplicaciones sucesivas de la base. Si el cálculo no puede realizarse, devuelva cero.

12. **Conversión de monedas**: Escriba una función en JavaScript llamada `ConversionPesos` que permita convertir una cantidad de dinero dada en dólares, libras, yenes o euros a Pesos Argentinos. Utilice las siguientes equivalencias aproximadas:
    - 1 USD = 905.75 ARS
    - 1 GBP = 1,264.29 ARS
    - 1 JPY = 8.69 ARS
    - 1 EUR = 968.52 ARS

13. **Promedio y calificación de notas**: Realice un programa en JavaScript que permita ingresar repetidamente el código (DNI) del estudiante (tipo entero) y dos notas (Nota1 y Nota2) de los exámenes (tipo real). La finalización del ingreso de datos ocurre cuando se ingresa un código igual a 999 (validar que las notas sean valores mayores o iguales a cero). Calcule el promedio de las notas mediante una función llamada `promedioNotas`. Asigne la calificación de acuerdo a las notas usando una función denominada `calificacionNotas` que reciba la Nota promedio y devuelva una cadena de caracteres con la calificación correspondiente.

14. **Cálculo de salario de empleados**: Escriba un programa en JavaScript para calcular el salario y mostrar el detalle de los empleados de una fábrica. Los empleados tienen un sueldo básico común y se adiciona un 10% por cada aumento de categoría, un 5% por cada año de antigüedad. A todos los empleados se les descuenta un 11% por aportes jubilatorios y un 4% por obra social, ambos del sueldo básico. Finalmente, se añade un aumento fijo de $200 en concepto de salario familiar por cada hijo menor de 18 años. El programa deberá contar con una función denominada `Aumento` y una función denominada `Descuentos`.

15. **Cálculo del jornal diario**: Los empleados de una fábrica trabajan en dos turnos, diurno y nocturno. Escriba una función en JavaScript llamada `jornal` que tome como parámetros el número de horas, el turno y el tipo de día ("Festivo" o "Laborable") y devuelva el sueldo a cobrar. Además, escriba un algoritmo principal que pida el nombre del trabajador, el día de la semana, turno y número de horas trabajadas, y muestre el sueldo a cobrar usando la función `jornal`. Tenga en cuenta que la función pide el tipo de día, pero en el algoritmo se debe saber si el día introducido por el usuario es festivo o no.

### 4. Contribuye

Si deseas contribuir a este proyecto, por favor crea un pull request y asegúrate de seguir las buenas prácticas de codificación.

¡Buena suerte y feliz codificación!
