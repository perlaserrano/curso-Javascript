'use strict'

// Bom es el browser object model
function getBom(){
    
console.log(screen.width);
console.log(screen.height);
console.log(window.location.href);


}

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url, "" ,"width=400,heigth=300");
}

getBom();