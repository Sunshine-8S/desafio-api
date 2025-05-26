"use strict";

const $titulo = document.getElementById("titulo");
const $listaUsuario = document.getElementById("listaUsuario");
const $fotoUsuario = document.getElementById("fotoUsuario");
const $direccion = document.getElementById("direccion");
const $credenciales = document.getElementById("credenciales");
const $btnSiguiente = document.getElementById("btnSiguiente");

$btnSiguiente.addEventListener("click", usuario);

function usuario() {
    fetch("https://randomuser.me/api")
    .then((response)=>response.json())
    .then((user)=> {

        const usuario = user.results[0];

        $titulo.textContent = `${usuario.name.first} ${usuario.name.last}`;

        $fotoUsuario.innerHTML = `<img class="foto-usuario" src="${usuario.picture.large}" alt="Foto de usuario">`;

        $listaUsuario.innerHTML = `
            <li>Edad: ${usuario.dob.age}</li>
            <li>Celular: ${usuario.cell}</li>
            <li>Correo: ${usuario.email}</li>
        `;

        $direccion.innerHTML = `<p>${usuario.location.street.name} ${usuario.location.street.number}, ${usuario.location.city} ${usuario.location.state}. ${usuario.location.country}</p>`;

        $credenciales.innerHTML = `
            <p>Nombre de usuario: ${usuario.login.username}</p>
            <p>ID del usuario: ${usuario.login.uuid}</p>
            <p>Fecha de registro: ${usuario.registered.date}</p>
        `;

    })
    .catch(()=> {
        alert(`Ha oocurrido un error, por favor intenta más tarde`);
    });
}

