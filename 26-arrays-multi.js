'use strict'

var categorias = ["accion","terror","comedia"];
var peliculas = ['la verdad duele', 'la vida es bella','gran torino'];
peliculas.reverse();
console.log(peliculas);

var cine =[categorias,peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);
/*
var elemento = "";
do{
    elemento = prompt("Introduce tu pelicula");
    peliculas.push("batman");

}while(elemento != "Acabar");
*/
var indice = peliculas.indexOf('gran torino');

if(indice > -1 ){
    peliculas.splice(indice, 1);

}

var pelicula_sting = peliculas.join();

var cadena = "texto1, texto2, texto3";

var cadena_array = cadena.split(", ");
  

console.log(cadena_array);