<script setup>

const emit = defineEmits(['nuevaNota'], ['filtrarPorPalabra'])

function nuevaEntrada(){
    emit('nuevaNota', contenido)
}
var contenido = '';

</script>


<template>
    <header>
        <h1>Proyecto - Sara Caro</h1>
        <input v-model="contenido" type="text" name="recordar" id="recordar" placeholder="¿Que quieres recordar?" @keyup.enter="nuevaEntrada">
        <input type="submit" value="Añadir" id="boton">
    </header>
</template>



<style scoped>

</style>