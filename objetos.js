var persona = {  //Crea una objeto
    nombre: "Nicoll", 
    edad: 19
}

var persona2 = {
    nombre: "Sebas", 
    edad: 10
}

function  imprimirNombreMayus({nombre, edad}){
    console.log(nombre.toUpperCase(), "tiene" ,edad)
}

imprimirNombreMayus(persona)
imprimirNombreMayus(persona2)