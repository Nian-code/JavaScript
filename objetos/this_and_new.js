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

var nicoll = new persona("Nicoll", "Angulo", 19, 1.65)
var daniel = new persona("Daniel", "Franco", 24, 1.80)

nicoll.saludar(daniel)
nicoll.esAlto()
daniel.esAlto()