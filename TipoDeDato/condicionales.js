var nicoll = {
    nombre : "nicoll",
    edad: 19,
    ingeniero: false,
    bachiller: true,
    escolar: true
}

var sebas = {
    nombre : "sebas",
    edad: 10,
    ingeniero: false,
    bachiller: false,
    escolar: true
}

function imprimirProfesiones(persona){
    nombre = persona.nombre.charAt(0).toUpperCase() + persona.nombre.substr(1)
    console.log(`${nombre} es:`)

    if (persona.ingeniero){
        console.log(`ingeniero`)
    } else{
        console.log(`No es ingeniero`)
    }
    if (persona.bachiller){
        console.log(`bachiler`)
    } else {
        console.log(`No es bachiler`)
    }
    if (persona.escolar){
        console.log(`escolar`)
    } else {
        console.log(`No es escolar`)
    }
}

imprimirProfesiones(nicoll)
imprimirProfesiones(sebas)

const EDAD_LEGAL = 18;

const esMayorMenor = ({edad}) => edad >= EDAD_LEGAL // => significa Retorna

function imprimirMayorMenor(persona){
    esMayorMenor(persona) ?  console.log(`${persona.nombre} es mayor de edad`)
    :console.log(`${persona.nombre} no menor de edad`)
}

imprimirMayorMenor(nicoll)
imprimirMayorMenor(sebas)

const esMenorEdad = ({edad}) => edad <= 18 ? 
    console.log("Es menor") : console.log("No es menor")

esMenorEdad(nicoll)