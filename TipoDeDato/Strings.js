console.log("Primer print") //Es un print

//variable

var nombre = 'Nicoll Idaly'
// ` con esta comilla para poner varibales dentro del log
console.log(`Hola,  ${nombre}`)

var apellido1 = 'Angulo', apellido2 = "mejia" // para declarar dos a la vez
console.log(`Hola, ${apellido1} ${apellido2}`)

var nombreCompleto = `${nombre} ${apellido1} ${apellido2}`.toUpperCase()// En mayuscula 
console.log("HOLA", nombreCompleto) 

console.log(nombre.charAt(0)) // Accede a una posición
console.log(nombre.length)  // Cantidad de letras

// slice
console.log(nombre.slice(1,3)) //No cuenta la última posición es decir si pongo  tres llega hasta el 2
console.log(nombre.substr(1,2)) // si cuenta la última posición

//Desafio

console.log(nombre.substr(-1)) //Con números negativos se cuentan de atrás adelante