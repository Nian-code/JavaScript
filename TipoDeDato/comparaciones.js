var x=4, y = "4"

console.log(x == y) // == Para comparar el valor sin importar tipo
console.log(x === y) // === Para saber si es el mismo valor y mismo tipo

//Recomiendan === 


var nicoll = {
    nombre  : "nicoll"
}

var nicoll2 = {
    nombre  : "nicoll"
}

//Con objetos da ==  porque compara la dirección en memoría
console.log(nicoll.nombre === nicoll2.nombre)
