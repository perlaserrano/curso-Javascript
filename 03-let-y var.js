'use strict'
// pruebas con let y var
alert('Hola');

var numero = 40;  // valor 40
//prueba con var
if(true){
    var numero = 50;
    console.log(numero);    //valor 50

}

console.log(numero);  // valor 50

//prueba con let
var texto = "curso js perla serrano web";
console.log(texto); //valor

if(true){
    let texto = "curso laravel 5 perla serrano web"; 
    console.log(texto); //valor laravel 5
}

console.log(texto); //valor js