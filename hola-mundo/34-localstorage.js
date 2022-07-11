'use strict'

// localstorage

// comprobar disponibilidad del localstorage

if(typeof (Storage) !== 'undefined'){
    console.log("localstorage disponible");

}else{
    console.log(" incompatible con localstorage disponible");


}

// guardar datos
localStorage.setItem("titulo","Curso de Symfony de Perla Serrano");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo");

// guardar objetos
var usuario = {
    nombre: "Perla Serrano",
    email:"Perla@perla.com",
    web:"Perlaserranoweb.es"
};

localStorage.setItem("usuario",JSON.stringify (usuario));

// recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(userjs.web+" -"+userjs.nombre);

localStorage.clear();