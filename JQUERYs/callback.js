const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id"

// Hacer requests desde javascript
//crossDomain es decirle al programa que esta petición es para internet
const OPS = {crossDomain: true}

const obtenerPersonaje = (id) =>{

    return new Promise(function (resolve, reject){

        const URL_REQUEST = `${API_URL}${PEOPLE_URL.replace(":id", id)}`

        $.get(URL_REQUEST, OPS, function (respuesta){
            resolve(respuesta)
    }).fail(() => reject(id))
    })
        
    
    //<- enviar una petición .fail() en caso de error ejecuta el código
}

obtenerPersonaje(1, function(persona){

    console.log(`Hola me llamo ${persona.name}`)

    obtenerPersonaje(2, function(persona){
        console.log(`Hola me llamo ${persona.name}`)

        obtenerPersonaje(3, function(persona){
        console.log(`Hola me llamo ${persona.name}`)


            obtenerPersonaje(4, function(persona){
                console.log(`Hola me llamo ${persona.name}`)
                
                obtenerPersonaje(5, function(persona){
                    console.log(`Hola me llamo ${persona.name}`)
                    
                    obtenerPersonaje(85, function(persona){
                        console.log(`Hola me llamo ${persona.name}`)})
                    })
            })
        })
    })
})
