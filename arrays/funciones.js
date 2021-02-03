var nombre = "nicoll", edad  = 19

function imprimirNombreEdad(nombre, edad){
    // Función imprime nombre y hace la limpieza de nombre con la primera letra en mayus
    nombre = nombre.charAt(0).toUpperCase() + nombre.substr(1)
    console.log(`${nombre} tiene ${edad} años`)
}

imprimirNombreEdad(nombre = "Idaly", edad = 20)
