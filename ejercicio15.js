// Cálculo del jornal diario:

// Los empleados de una fábrica trabajan en dos turnos, diurno y nocturno. Escriba una función en JavaScript llamada jornal que tome como parámetros el número de horas, el turno y el tipo de día ("Festivo" o "Laborable") y devuelva el sueldo a cobrar. Además, escriba un algoritmo principal que pida el nombre del trabajador, el día de la semana, turno y número de horas trabajadas, y muestre el sueldo a cobrar usando la función jornal. Tenga en cuenta que la función pide el tipo de día, pero en el algoritmo se debe saber si el día introducido por el usuario es festivo o no.
const prompt = require('prompt-sync')({sigint: true})



const empleado = () => {
    const diasLaborables = ['lunes', 'martes','miercoles', 'jueves', 'viernes']
    const valorHoras = 10
    let tipoDia
    let nombre = prompt("Nombre del operario: ")
    let fecha = prompt("Dia actual: ")
    let turno = prompt("Turno: ")
    let horasTrabajadas = parseInt(prompt("Total de horas trabajadas: "))
    
    const dia = (a) => {
        a = fecha
        if (diasLaborables.includes(fecha)) {
            tipoDia = 'laborable'
            return tipoDia
        } else if (fecha === 'sabado' || fecha === 'domingo'){
            tipoDia = 'festivo'
            return tipoDia
        } else{
            alert = 'Tipo de día o turno invalido'
            return alert
        }
    }
    
    const jornal = (tipoDia, turno, horasTrabajadas) => {
        let sueldo = 0
        if (tipoDia === 'laborable' && turno === 'diurno') {
            sueldo = valorHoras * horasTrabajadas
            return sueldo
        }
        if (tipoDia === 'laborable' && turno === 'nocturno') {
            sueldo = valorHoras * horasTrabajadas * 1.5
            return sueldo
        }
        if (tipoDia === 'festivo' && turno === 'diurno') {
            sueldo = valorHoras * horasTrabajadas * 2
            return sueldo
        }
        if (tipoDia === 'festivo' && turno === 'nocturno') {
            sueldo = valorHoras * horasTrabajadas * 2.5
            return sueldo
        }
        alert = 'Tipo de día o turno invalido'
        return alert
    }
    
    jornal(tipoDia, turno, horasTrabajadas);
    dia(fecha)

    console.log('-------------------------')
    console.log(`Nombre: ${nombre}`)
    console.log(`Día de la semana: ${fecha}`)
    console.log(`Turno: ${turno}`)
    console.log(`Horas trabajadas: ${horasTrabajadas}`)
    console.log(`Sueldo a cobrar: ${jornal(tipoDia, turno, horasTrabajadas)}`)
    console.log('-------------------------')
}

empleado()
