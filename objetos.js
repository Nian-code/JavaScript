var nicoll = {  //Crea una objeto
    nombre: "Nicoll", 
    edad: 19
}

var sebas = {
    nombre: "Sebas", 
    edad: 10
}

function  imprimirNombreMayus(persona){
    var {nombre, edad} = persona
    console.log(nombre.toUpperCase(), "tiene" , edad, "años")
}

function  cumpleaños(persona){
    return {
        ...persona, // duplica el objeto y sus atributos
        edad : persona.edad + 1
    }
}

imprimirNombreMayus(nicoll)
imprimirNombreMayus(sebas)
