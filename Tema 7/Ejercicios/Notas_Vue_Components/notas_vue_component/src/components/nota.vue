<script setup>

import { ref } from 'vue';

var props = defineProps(['recordatorio']);

const emit = defineEmits(['eliminarTarea'], ['cambioPrioridad'], ['calcularPendientes']);

function eliminarTarea(recordatorio){
    emit('eliminarTarea', recordatorio)
}

function prioridad(nuevaPrioridad){
    props.recordatorio.prioridad = nuevaPrioridad;
    emit('cambioPrioridad')
}

function marcado(){
    props.recordatorio.realizada = !props.recordatorio.realizada;
    calcularPendientes();
}

function calcularPendientes(){
    emit('calcularPendientes')
}

</script>



<template>
                <div class="reminder-text">
                    <i class="fa-regular " :class="[{'fa-check-circle' : recordatorio.realizada}, {'fa-circle' : !recordatorio.realizada}]" @click="marcado"></i>
                    <h2 :class="{tachado: recordatorio.realizada}">{{recordatorio.titulo}}</h2>
                    
                    <i class="fa-solid fa-circle-minus" @click="eliminarTarea(recordatorio)"></i>

                    <h6>
                        Prioridad 
                        <button id="low" :class="[{selected : recordatorio.prioridad==1}, {notSelected : recordatorio.prioridad!=1}]"  @click="prioridad(1)" >Low</button>
                        <button id="normal" :class="[{selected : recordatorio.prioridad==2}, {notSelected : recordatorio.prioridad!=2}]" @click="prioridad(2)">Normal</button>
                        <button id="high" :class="[{selected : recordatorio.prioridad==3}, {notSelected : recordatorio.prioridad!=3}]" @click="prioridad(3)">High</button>
                    </h6>
                </div>
            
</template>



<style scoped>


</style>