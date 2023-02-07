<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.js';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";

var usuario = ref('');
var contraseña = ref('');

function altaUsuario(){
    // createUserWithEmailAndPassword(auth, usuario.value, contraseña.value)
    signInWithPopup(auth, new GoogleAuthProvider())
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(userCredential.user);
        // ...
  })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        // ..
  });
}

</script>



<template>
    email: <input type="text" id="usuario" name="usuario" v-model="usuario">
    password: <input type="password" id="contraseña" name="contraseña" v-model="contraseña">
    <button @click="altaUsuario">Registrar Usuario</button>
</template>