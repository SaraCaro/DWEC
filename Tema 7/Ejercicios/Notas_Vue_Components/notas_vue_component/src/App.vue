<script setup>
import cabecera from './components/header.vue'
import nota from './components/nota.vue'
import pie from './components/footer.vue'
import registro from './components/registro.vue'
import { ref } from 'vue';


var recordatorios = ref([]);

const pendientes = ref(0)
const totalTareas = ref(0)

// local storage

if(localStorage.getItem('recordatorios')){
    recordatorios.value = JSON.parse(localStorage.getItem('recordatorios'));
    console.log('Cargando');
    totalTareas.value = recordatorios.value.length;
    getPendientes();
}

function nuevaNota(texto){
    recordatorios.value.push({
        titulo: texto,
        prioridad: 0,
        realizada: false
    })
    texto = '';
    totalTareas.value = recordatorios.value.length;
    pendientes.value++;
    guardarDatos();
}


function borrarCompletadas(){
    recordatorios.value = recordatorios.value.filter(function(recordatorio){
        return !recordatorio.realizada;
    })
    totalTareas.value = recordatorios.value.length;
    guardarDatos();
}

function eliminarTarea(recordatorio){
    let index = recordatorios.value.indexOf(recordatorio);
    recordatorios.value.splice(index,1);
    guardarDatos();
}

function prioridad(){
    recordatorios.value = recordatorios.value.sort(function(a,b){
        return b.prioridad - a.prioridad;
    })
    guardarDatos();
}

function getPendientes(){
    pendientes.value = recordatorios.value.filter(function(recordatorio){
        return !recordatorio.realizada;
    }).length;
    guardarDatos();
}

function palabraFiltrada(){
            return this.recordatorios.filter((ent)=> ent.titulo.includes(this.campoFiltro));
        }

function guardarDatos(){
    localStorage.setItem('recordatorios', JSON.stringify(recordatorios.value));
}
</script>

<template>
  <cabecera @nuevaNota="nuevaNota" @filtrarPorPalabra="palabraFiltrada">
    <router-link to="/registro"></router-link>
    </cabecera>
    <registro></registro>
    <router-link to="/privado">area</router-link>
    <hr>
    <p id="texto-tareas"><i class="fa-solid fa-chart-column"></i> <span id="pendientes">{{pendientes}}</span> tareas pendientes de un total de <span id="total">{{totalTareas}}</span>| <span><a href="#" id="borrar" @click="borrarCompletadas()"><i class="fa-solid fa-xmark"></i> Borrar tareas completadas</a></span></p>
    <hr>
    <main>
        <div id="container">
            <nota class="singleReminder" v-for="recordatorio in recordatorios" :recordatorio="recordatorio" @eliminarTarea="eliminarTarea(recordatorio)" @cambioPrioridad="prioridad" @calcularPendientes="getPendientes">

            </nota>
        </div>
    </main>
  <pie></pie>
</template>

<style scoped>

</style>
