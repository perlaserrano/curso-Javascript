'use strict'

/*
programa que pida dos numeros y que nos diga cual es el mayor ,el menor y si son iguales
PLUS: SI LOS NUMEROS NO SON UN NUMERO O SON MENORES O = A CERO NO LOS VUELVA A PEDIR
*/

var numero1 = parseInt(prompt('introduce el primer numero',0));
var numero2 =  parseInt(prompt('introduce el segundo numero',0));


while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('introduce el primer numero',0));
    numero2 =  parseInt(prompt('introduce el segundo numero',0));
    

}

if(numero1 == numero2){
    alert('LOS NUMEROS SON IGUALES');

}else if(numero1 > numero2){
    alert("EL NUMERO MAYOR ES:" + numero1);
    alert("EL NUMERO MENOR ES:"+ numero2);

}else if(numero2 > numero1 ){
    alert("EL NUMERO MAYOR ES:" + numero2);
    alert("EL NUMERO MENOR ES:"+ numero1);


}else{
    alert("INTRODUCE NUMEROS CORRECTOS");
}