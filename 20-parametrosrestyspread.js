'use strict'

// Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_las_frutas){
    console.log("fruta 1:", fruta1);
    console.log("fruta 2:", fruta2);
    console.log(resto_las_frutas);
}

listadoFrutas("Naranja","Manzana","Sandia","Pera","Melon");

var frutas = ["Naranja","Manzana"]
listadoFrutas(...frutas,"Manzana","Sandia","Pera","Melon");