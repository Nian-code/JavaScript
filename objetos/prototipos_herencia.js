function persona(nombre, apellido, edad, altura){
    this.nombre   = nombre
    this.apellido = apellido
    this.edad     = edad
    this.altura   = altura   
}

persona.prototype.saludar = function(otraPersona){
    console.log(`Hola, ${otraPersona.nombre} me llamo ${this.nombre}`)
} 

persona.prototype.esAlto = function(){
    console.log(`${this.altura >= 1.80 ? `${this.nombre} es una persona alta`
                : `${this.nombre} es una persona baja`}`)
}

function desarrollador(nombre, apellido, lenguaje){
    this.nombre = nombre
    this.apellido = apellido
    this.lenguaje = lenguaje
}

desarrollador.prototype = Object.create(persona.prototype)
desarrollador.prototype.constructor = desarrollador

desarrollador.prototype.saludar = function (){
    console.log(`Hola, mi nombre es ${this.nombre} y soy desarollador`)
}

desarrollador.prototype.lenguaje = function (){
    console.log(`Me gusta desarollar en ${this.lenguaje} `)
}

const nicoll = new persona("nicoll", "angulo", 19, 1.65)
const nicoll_dev  = new desarrollador("nicoll", "apellido", "Python y Javascript")

