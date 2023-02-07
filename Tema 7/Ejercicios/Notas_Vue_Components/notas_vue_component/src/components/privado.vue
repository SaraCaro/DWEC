<script setup>

import { ref } from 'vue';
import {auth} from '../firebase.js'
import { onAuthStateChanged } from "firebase/auth";
import {signOut} from "firebase/auth";

import { ref as ref2, uploadBytes, getDownloadURL } from "firebase/storage";

nombreUsuario = ref('');
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    nombreUsuario.value = user.email;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

function cerrarSesion(){
    auth.signOut().then(() => {
        console.log('Sesion cerrada');
    }).catch((error) => {
        console.log(error);
    });
}
</script>


<template>

    <h1>Area Privada</h1>
    <h2>Bienvenido {{ nombreUsuario }}</h2>
    <button @click="cerrarSesion">Cerrar Sesion</button>
</template>