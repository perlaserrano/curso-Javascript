'use strict'
/*
1.Pida 6 numeros por pantalla y los meta en un array
2.Mostrar el array entero /todos sus elementos/ en el cuerpo de la pagina y en la consola *
3.Oredenarlo y mostrarlo *
4.Invertir su orden y mostrarlo *
5.Mostrar cuantos elementos tiene el array * 
6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(Se valorara el uso de funciones)
*/



var numeros = new Array(6);

for(var i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("Introduce un numero"));

}

document.write(`<b>2.Mostrar el array entero /todos sus elementos/ en el cuerpo de la pagina y en la consola</b> <br> <br>` );

numeros.forEach((item, index) => {

    const numeroIntroducido = `Index: ${index}, Value: ${item}`

    document.write(`El elemento actual es: ${numeroIntroducido}<br>`);
    console.log(`El elemento que se esta recorriendo es: ${numeroIntroducido}`);
})

document.write("<hr>")

/**--------------------------- */

document.write(`<b>3.Oredenarlo y mostrarlo</b> <br> <br> `);

numeros.sort((a, b) => a - b);

numeros.forEach((item, index) => {

    const numeroIntroducido = `Index: ${index}, Value: ${item}`

    document.write(`El elemento actual es: ${numeroIntroducido}<br>`);
    console.log(`El elemento que se esta recorriendo es: ${numeroIntroducido}`);
})

document.write("<hr>")

/**--------------------------- */


document.write('<b>4.Invertir su orden y mostrarlo</b> <br> <br>');

numeros.reverse();

numeros.forEach((item, index) => {

    const numeroIntroducido = `Index: ${index}, Value: ${item}`

    document.write(`El elemento actual es: ${numeroIntroducido}<br>`);
    console.log(`El elemento que se esta recorriendo es: ${numeroIntroducido}`);
    
})

document.write("<hr>")

/**--------------------------- */

document.write("<b>5.Mostrar cuantos elementos tiene el array</b> <br> <br>");

document.write('ese array tiene: '+numeros.length+ "elementos");

document.write("<hr>")

/**--------------------------- */
//  var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");

document.write("<b>6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice (Se valorara el uso de funciones)<b> <br> <br>");

var Busqueda = parseInt(prompt("Introduce un numero para buscar en el array"));

var valor_encontrado = numeros.findIndex(item => Busqueda === item); // Si no encuentra nada retorna -1

if(valor_encontrado > -1){
    document.write(`El indice del valor encontrado es: ${valor_encontrado}`);

}else{
    document.write('No encontraste el valor');
}