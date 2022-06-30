'use strict'

// condicional if
// si A es igual a B entonces haz algo
var edad = 19;
var nombre = "david suarez";
/*
// operadores relacionales
mayor: >
menor:<
mayor o igual >=
menor o igual: <=
igual:==
distinto:!=


*/

if(edad >= 18){
    // es mayor de edad
    console.log(nombre+ " tiene "+edad+" anos, es mayor de edad" );

    if(edad <= 33){
        console.log('todavia eres milenial');

    }else if(edad >= 70){
        console.log('eres anciano');
    }else{
        console.log('ya no eres milenial');
    }

}else{
    // es menor de edad
    console.log(nombre+ " tiene "+edad+" anos, es menor de edad" );
}

/*

// operadores logicos
AND(Y): &&
OR(O): ||
NEGACION:!
*/
// NEGACION
var year = 2018;

if(year != 2016){
    console.log('el ano no es 2016 realmente es'+year);

}
// AND
if(year >= 2000 && year <= 2020 && year !=2018){
    console.log('estamos en la era actual');
}else{
    console.log('estamos en la era postmoderna');
}

//or

if(year == 2008 ||( year >= 2018 && year == 2028)){
    console.log('el ano acaba en 8');
}else{
    console.log('ano no registrado');
}

