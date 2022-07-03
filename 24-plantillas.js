'use strict'

// plantillas de texto

var nombre = prompt("Mete tu nombre");
var apellidos = prompt("mete tus apellidos");
// var texto = "Mi nombre es:"+nombre+"  <br/> mis apellidos son: "+apellidos;

var texto = `
<h1>hola que tal</h1>
<h3>mi nombre es: ${nombre}</h3>
<h3>mis apellidos son: ${apellidos}</h3>

`;


document.write(texto);