'use strict'

window.addEventListener('load', function () {

    function intervalo() {
        var tiempo = setTimeout(function () {
            console.log("set interval ejecutado");

            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px";

            } else {
                encabezado.style.fontSize == "50px";

            }

        }, 1000);

        return tiempo;


    }

    // Timers

   var tiempo = intervalo();
    var stop = this.document.querySelector("#stop");
    stop.addEventListener("click", function () {
        alert("Has parado el intervalo en bucle");

        clearInterval(tiempo);
    });
    var start = this.document.querySelector("#start");
    start.addEventListener("click", function () {
        alert("Haz iniciado el intervalo en bucle");
        intervalo();
    });

});