function IMC(peso,altura){
    return peso/(altura * altura);
}
console.log("Ejercicio IMC: 100 kg y 1.8 m = IMC =",IMC(100,1.8));

//Ejercicio 2

function factorial(numero){
    let resultado=1;
    for(let i=numero;i>0;i--){
        resultado*=i;
    }
    return resultado;
}
console.log("Factorial de 5: ",factorial(5));

//Ejercicio 3 Dolares a pesos
function dolarPesos(dolares){
    return dolares*20.5;
}
console.log(`El valor de 5 dolares a pesos es: ${dolarPesos(5)}`);

function areaPerimetroSala(altura,ancho){
    let area=altura*ancho;
    let perimetro=(altura*2)+(ancho*2);
    return {area,perimetro};
}
let sala=areaPerimetroSala(5,4);
console.log(`El area de una sala de 5 x 4 es de:${sala.area} y el perimetro de ${sala.perimetro}`);

//Tabla de multiplicar
function tablaMultiplicar(numero){
    for (let i=1;i<=10;i++){
        console.log(numero*i);
    }
}
tablaMultiplicar(7);