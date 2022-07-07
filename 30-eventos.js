'use strict'

// Eventos del raton

window.addEventListener('load', () => {

    var boton = document.querySelector("#boton");

boton.addEventListener("click", () => {
    console.log("me haz dado clic");

    var bg = boton.style.background;

    if (bg == "green") {
        boton.style.background = "red";
    } else {
        boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true;
})

// Mouse over

boton.addEventListener('mouseover', () =>{
    boton.style.background = "yellow";
});

// Mouse out

boton.addEventListener('mouseout', () =>{
    boton.style.background = "ccc";
});

// Focus
var  input = document.querySelector("#campo_nombre");

input.addEventListener('focus', () =>{
     console.log("[focus]Estas dentro del input");

});


// Blur
input.addEventListener('blur', () =>{
    console.log("[blur]Estas fuera del input");

});

// Keydown
input.addEventListener('keydown', (Event) =>{
    console.log("[keydown]pulsando esta tecla ", String.fromCharCode(Event.keycode));

});


// Keypress
input.addEventListener('keypress', (Event) =>{
    console.log("[keypress]tecla presionada ", String.fromCharCode(Event.keycode));

});

// Keup
input.addEventListener('keyup', (Event) =>{
    console.log("[keyup]tecla soltada ", String.fromCharCode(Event.keycode));

});


});

// end load

