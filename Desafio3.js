//Ejercicio 1
let listaGenerica=[];

//Ejercicio 2
let lenguajesDeProgramacion=['JavaScript','C','C++','Kotlin','Python'];

//Ejercicio 3
lenguajesDeProgramacion.push('Java','Ruby','GoLang');

//Ejercicio 4
function mostrarLenguajesProgramacion(){
    console.log("Lenguajes: ",lenguajesDeProgramacion);
}
mostrarLenguajesProgramacion();

//Ejercicio 5
let lenguajesInversos=[];
function mostrarLenguajesInversos(){
    for (let i=lenguajesDeProgramacion.length-1; i>=0; i--){//El i>=0 es la condicion que debe de cumplir cada ciclo para que entre, NO ES HASTA DONDE SE DEBE DE HACER
        lenguajesInversos.push(lenguajesDeProgramacion[i]);
    }
    console.log('Lenguajes Inversos',lenguajesInversos);
}
mostrarLenguajesInversos();

//Ejercicio 6
let listaNumeros=[43,53,35,43,52,61,17,38,49,10];
function promedio(){
    let cantidad=listaNumeros.length;
    let suma=0;
    let resultado=0;
    for(let i=0;i<cantidad;i++){
        suma+=listaNumeros[i];
    }
    resultado=suma/cantidad;
    console.log("E promedio de la lista", listaNumeros, "es: ",resultado);
}
promedio();

//Ejercicio 7

function numeroMayorMinimo(){
    let max=Math.max(...listaNumeros);
    let min=Math.min(...listaNumeros);
    console.log("El numero maximo de la lista es:",max,"Y el minimo es ",min);
}
numeroMayorMinimo();

//Ejercicio 8
function suma() {
    let suma = 0;
    let cantidad = listaNumeros.length;
    for (let i = 0; i < cantidad; i++) {
        suma += listaNumeros[i];
    }
    console.log("La suma de los elementos de la lista es:",suma);
}
suma();

//Ejercicio 9
function encontrarElemento(elemento){
    let posicion=lenguajesDeProgramacion.indexOf(elemento);
    console.log('La posicion de ',elemento,'en la lista es: ',posicion);
}
encontrarElemento('Python');

//Ejercicio 10
function sumaListas(lista1,lista2){
    let suma = lista1.map((valor,i)=>valor+lista2[i]);
    console.log("La suma es :",suma);
}
sumaListas([1,2,3],[4,5,6]);

//Ejecicio 11

function cuadradoLista(lista1){
    let cuadrado=lista1.map((n)=>n*n);
    console.log("La cuadrado es :",cuadrado);
}
cuadradoLista([1,2,3,4]);