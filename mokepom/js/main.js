let AtaqueJugador
let AtaqueRival

function IniciarJuego(){
let MascotaJugador = document.getElementById('boton-mascota')
MascotaJugador.addEventListener('click', SeleccionarMascota)
let BotonFuego = document.getElementById('boton-fuego')
BotonFuego.addEventListener('click', AtaqueFuego)
let BotonAgua = document.getElementById('boton-agua')
BotonAgua.addEventListener('click', AtaqueAgua)
let BotonTierra = document.getElementById('boton-tierra')
BotonTierra.addEventListener('click', AtaqueTierra)
}

window.addEventListener('load',IniciarJuego)

function SeleccionarMascota(){
    let InputHipodoge = document.getElementById('Hipodoge')
    let SpanMascotaJugador = document.getElementById('mascota-elegida-jugador')
    let InputCapipepo = document.getElementById('Capipepo')
    let InputRatigueya = document.getElementById('Ratigueya')
    let InputLangostelvis = document.getElementById('Langostelvis')
    let InputTacapalma = document.getElementById('Tacapalma')
    let InputPydos = document.getElementById('Pydos')
    
    if (InputHipodoge.checked){
        SpanMascotaJugador.innerHTML = "Hipodoge"
    }
    else if(InputCapipepo.checked){
        SpanMascotaJugador.innerHTML = "Capipepo"
    }
    else if(InputRatigueya.checked){
        SpanMascotaJugador.innerHTML = "Ratigueya"
    }
    else if(InputLangostelvis.checked){
        SpanMascotaJugador.innerHTML = "Langostelvis"
    }
    else if(InputTacapalma.checked){
        SpanMascotaJugador.innerHTML = "Tacapalma"
    }
    else if(InputPydos.checked){
        SpanMascotaJugador.innerHTML = "Pydos"
    }
    else{
        alert("No seleccionaste ninguna mascota")
    }
    SeleccionarMascotaEnemigo()

}
function eleccion(mascota){
    let SpanMascotaEnemigo = document.getElementById('mascota-elegida-enemigo')
    if(mascota == 1){
        SpanMascotaEnemigo.innerHTML = "Hipodogue"
    }
    else if(mascota == 2){
        SpanMascotaEnemigo.innerHTML = "Capipepo"
    }
    else if(mascota == 3){
        SpanMascotaEnemigo.innerHTML = "Ratigueya"
    }
    else if(mascota == 4){
        SpanMascotaEnemigo.innerHTML = "Langostelvis"
    }
    else if(mascota == 5){
        SpanMascotaEnemigo.innerHTML = "Tacapalma"
    }
    else if(mascota == 6){
        SpanMascotaEnemigo.innerHTML = "Pydos"
    }
    else{
        SpanMascotaEnemigo.innerHTML = "Dato erroneo"
    }
    return SpanMascotaEnemigo.innerHTML 

}
function SeleccionarMascotaEnemigo(){
    let enemigo = 0
    let eleccionEnemigo = 0
    enemigo = aleatorio(1,6)
    eleccionEnemigo= (eleccion(enemigo))
    return eleccionEnemigo


}

function AtaqueFuego(){
    ataqueJugador = 'Fuego'
    AtaqueAleatorioEnemigo()
}
function AtaqueAgua(){
    ataqueJugador = 'Agua'
    AtaqueAleatorioEnemigo()
}

function AtaqueTierra(){
    ataqueJugador = 'Tierra'
    AtaqueAleatorioEnemigo()
}

function AtaqueAleatorioEnemigo(){
    let AtaqueAleatorio = 0
    AtaqueAleatorio = aleatorio(1,3)
    if( AtaqueAleatorio == 1){
        AtaqueRival = 'Fuego'
    }
    else if( AtaqueAleatorio == 2){
        AtaqueRival = 'Agua'
    }
    else if(AtaqueAleatorio == 3){
        AtaqueRival = 'Tierra'
    } 
    else{
        AtaqueRival = 'Error'
    }



}


function aleatorio(min,max){
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
    
}