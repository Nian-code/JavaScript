const NUMERO_MAXIMO = 5
const NUMERO_MINIMO = -5

const ALEATORIOS = (NUMERO_MINIMO, NUMERO_MAXIMO) =>
    Math.round(Math.random() * NUMERO_MAXIMO +  Math.random() * NUMERO_MINIMO)
    // Si no se pone round sale algo así 0.3994152569019116

var nicoll = {
    nombre :  "nicoll",
    edad: 19,
    peso: 75
} 

console.log("Nicoll pesaba", nicoll.peso)

const incrementoPesoPersona = (persona, incremento) => persona.peso += incremento
const DIAS_DEL_AÑO = 365

for(var i = 1; i <= DIAS_DEL_AÑO; i++){
    incremento = ALEATORIOS(NUMERO_MINIMO, NUMERO_MAXIMO)
    incrementoPesoPersona(nicoll, incremento)
    // console.log(incremento)
}
console.log("Al final del año nicoll peso ", nicoll.peso)