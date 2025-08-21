//Variables
let numeroSecreto=0;
let intentos=1;
let numerosGenerados=[];
let rango=10;
let limiteIntentos=3;

//Función para asignar un mensaje a una etiqueta del HTML
function asignarTextoElemento(etiqueta,mensaje){
    let variable=document.querySelector(etiqueta);
    variable.innerHTML=mensaje;
}

//Función para generar Numero Secreto
function generarNumeroSecreto(rango){
    let numeroSecreto= Math.floor(Math.random()*rango)+1;
    //Verificar si se han sorteado todos los numeros
    if (numerosGenerados.length==rango){
        asignarTextoElemento('p','Ya se han sorteado todos los numeros');
    }
    else {
        //Recursividad en caso de que el numero generado ya se generó antes.
        if (numerosGenerados.includes(numeroSecreto)) {
            return generarNumeroSecreto(rango);
        } else {
            //Se agrega el número generado a la lista de ya usados y se retorna el valor del número
            numerosGenerados.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

//Función para limpiar la caja de texto de la página.
function limpiarCajaTexto(){
    document.querySelector('#numeroUsuario').value='';
}

//Función para el comportamiento de la pagina al presionar el botón "Intentar"
function botonIntentar(){
    let numeroUsuario=parseInt(document.getElementById("numeroUsuario").value);//Se accede al DOM, se obtiene un elemento por ID y se obtiene un atributo de ese objeto en este caso value
    //Checamos en la consola de navegador que se genera correctamente el numero secreto, se aumentan los intentos y si el Numero Secreto es oincidente con el Numero del Usuario.
    //console.log("Numero Secreto: ",numeroSecreto);
    //console.log("Numero Usuario: ",numeroUsuario);
    //console.log(numeroSecreto===numeroUsuario);
    //console.log("Numero de intentos",intentos);

    //Caso en el que el usuario acierta.
    if(numeroSecreto===numeroUsuario){
        asignarTextoElemento('p',`Felicidades!, el número secreto es: ${numeroUsuario} y lo has acertado en ${intentos} ${intentos==1 ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');//Se habilita el botón de Nuevo Juego
        //console.log("Lista numeros generados", numerosGenerados);//Vemos en la consola qué números ya se han sorteado.
    }
    else{
        //Usuario se equivocó de número
        if(numeroSecreto>numeroUsuario){
            asignarTextoElemento('p',"El número secreto es mayor");
        }
        else{
            asignarTextoElemento('p',"El número secreto es menor");
        }
        intentos++;
        limpiarCajaTexto();
    }
}

//Función para establecer todo a como estaba al principio en para un Nuevo Juego.
function condicionesIniciales() {
    //Reiniciar mensajes de parrafo
    asignarTextoElemento('h1','Juego Amigo Secreto');
    asignarTextoElemento("p","Indica un número del 1 al 10");
    //Generar nuevo numero secreto
    numeroSecreto=generarNumeroSecreto(rango);
    //Limpiar cantidad de intentos
    intentos=1;
}

//Función para habilitar un nuevo Juego
function nuevoJuego(){
    limpiarCajaTexto();
    //Desabilitar boton Reiniciar juego
    document.getElementById('reiniciar').setAttribute('disabled',true);
    //Establecemos las condiciones iniciales al iniciar el juego
    condicionesIniciales();
}

//Estabecer condiciones iniciales al iniciar el juego
condicionesIniciales();





