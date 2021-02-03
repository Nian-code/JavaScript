var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const personas = [sacha, alan, martin, dario, vicky, paula]

const esAlta  = ({altura}) => altura > 1.80

const personas_altas = personas.filter(esAlta) //Filter recibe la función 
const personas_bajas = personas.filter(function esbaja({altura}){
    return altura < 1.70
})  //Filter recive una función

console.log(personas_altas)
console.log(personas_bajas)

// Función map
const altura_cm = persona => ({...persona, 
altura: persona.altura * 100})  // se envuelve el objeto en parentesis para poder retornalo

const personas_cms = personas.map(altura_cm)

console.log(personas_cms)
console.log(personas)