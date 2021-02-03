let signo 

do{

signo = prompt("Cuál es tu signo:").toLowerCase()

console.log(signo)

var horoscopo = {
    acuario : "Debería tener en cuenta las diferentes señales que se le presenten en el día. Muchas de ellas, contendrán la clave que orientará su futuro próximo.",
    aries   : "Por más que se sienta presionado por las situaciones que vive, su habilidad le permitirá esquivar cualquier dificultad que se le presente en la jornada.",
    tauro   : "Aproveche, ya que será una jornada en la que podrá exponer su vitalidad e inteligencia en todo lo que emprenda. No dude y ponga en marcha esos proyectos postergados.",
    geminis : "Durante el día, sepa que con su vitalidad y pasión logrará llevar a buen término los proyectos que muchos de su entorno creían irrealizables por usted.",
    cancer  : "Será una jornada donde podrá luchar para conseguir todo lo que desea hace tiempo y podrá obtenerlo sin inconvenientes. No permita que se escape ninguna oportunidad.",
    leo     : "Hoy resuelva sobre la marcha esas situaciones nuevas que salgan a luz. Sepa que parte de sus futuras conquistas amorosas dependerán de su creatividad.",
    virgo   : "Recuerde no dejar para mañana la propuesta que quiere hacerle hoy a esa persona que hace tiempo no ve. Es hora de que empiece a actuar sin demorarse.",
    libra   : "Deje de temerle al esfuerzo y sea más responsable en la vida. Debería tener presente que los logros muchas veces suelen tardar y requieren de mayor constancia.",
    escorpion: "Ponga más atención a los sueños que está teniendo últimamente por las noches. Pronto lo conectará con sus más profundos anhelos en su vida personal.",
    sagitario: "Vivirá una etapa especial donde deberá ordenar cada uno de los pensamientos. Intente tomarse un tiempo esencial para elaborar cada una de sus ideas.",
    capricornio: "No se detenga en el camino y anímese a lo desconocido. Será un día donde tendrá su mente relajada y con deseos de conocer nuevos rumbos para su vida.",
    piscis  : "Seguramente las obligaciones cotidianas lo superarán demasiado, evite caer en la desesperación. Paso a paso logrará concluir con todas las tareas que se propuso." 
}

switch(signo){
    case "acuario":
        console.log(horoscopo.acuario)
        break
    case "acuario":
        console.log(horoscopo.acuario)
        break
    case "aries":
        console.log(horoscopo.aries)
        break
    case "tauro":
        console.log(horoscopo.tauro)
        break
    case "geminis" | "géminis":
        console.log(horoscopo.geminis)
        break
    case "cancer" | "cáncer":
        console.log(horoscopo.cancer)
        break
    case "leo":
        console.log(horoscopo.leo)
        break
    case "virgo":
        console.log(horoscopo.virgo)
        break
    case "libra":
        console.log(horoscopo.libra)
        break
    case "escorpion":
        console.log(horoscopo.escorpion)
        break
    case "sagitario":
        console.log(horoscopo.sagitario)
        break
    case "capricornio":
        console.log(horoscopo.capricornio)
        break
    case "piscis":
        console.log(horoscopo.escorpion)
        break
    default: 
        console.log(`No se encontró ${signo}`)
}} while(!signo.indexOf(horoscopo)) // verfica si pertenece al array