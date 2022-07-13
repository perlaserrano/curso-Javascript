'use strict'
// Fetch (ajax) y peticiones a servisios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_Janet = document.querySelector("#Janet");




// getUsuarios().then((response) => {
//     return response.json()
// })
// .then((data) =>{
//     console.log(data);

//     console.log(data.data);
// })

getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);

        return getInfo();


    })
    .then(data => {

        div_profesor.innerHTML = data;

        return getJanet();

    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);

    })
    .catch(error => {
        alert("Error en las peticiones");
    });
   

function getUsuarios() {
    // Peticion Asincrona
    return fetch('https://reqres.in/api/users?page=1');
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}

function getInfo() {

    var profesor = {
        nombre: 'Perla',
        apellidos: 'Serrano',
        url: 'https//Perlaserranoweb.es'
    };

    return new Promise((resolve, reject) => {
        var profesor_string = "";
        setTimeout(() => {
            profesor_string = JSON.stringify(profesor);

            
        if (typeof profesor_string == 'string' || profesor_string != "") return reject('error 1');
        
     
        return resolve(profesor_string);

            
        }, 3000);


    });
}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + ' . ' + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector("#usuarios .loading").style.display = 'none';

    });

}

function mostrarJanet(user) {
    console.log(user);
    var nombre = document.createElement('h4');
    var avatar = document.createElement('img');

    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';


    div_Janet.appendChild(nombre);
    div_Janet.appendChild(avatar);

    document.querySelector("#Janet .loading").style.display = 'none';
};

