class persona {
    constructor (nombre, apellido, edad, altura){
        this.nombre   = nombre
        this.apellido = apellido
        this.edad     = edad
        this.altura   = altura   
    }

    saludar(devolverSaludo){
        console.log(`Hola, me llamo ${this.nombre}`)
        if(devolverSaludo){
            devolverSaludo(this)
        }
    }

    esAlto(){
        console.log(`${this.altura >= 1.80 ? `${this.nombre} es una persona alta` 
        : `${this.nombre} es una persona baja`}`)
    }
}

class desarrollador extends persona{
    constructor (nombre, apellido, lenguaje){
        super(nombre, apellido)
        this.lenguaje = lenguaje
    }
    
    like_lenguaje(){
        console.log(`Me gusta desarollar en ${this.lenguaje} `)
    }
}

const esDev = (persona) => persona instanceof desarrollador

function responderSaludo (persona) {
    console.log(`Buen día, ${persona.nombre} gusto en saludarte 
    ${esDev(persona) ? "No sabía que era desarrolador" : "¿Cuál es tu profesión?"}`)
}

const sebas = new persona("sebas", "angulo", 10, 1.41)
const nicoll_dev  = new desarrollador("nicoll", "angulo", "Python y Javascript")

sebas.saludar(responderSaludo)
nicoll_dev.saludar(responderSaludo)
