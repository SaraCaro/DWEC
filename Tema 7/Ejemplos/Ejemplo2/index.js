const { createApp } = Vue

createApp({
    data() {
    return {
        entradas:[
            {
                codigoArt: 1,
                titulo: "Fin de semana en Madrid",
                texto: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt qui fugit possimus placeat, similique amet iste suscipit quae omnis",
                url: "http://www.google.es",
                ubicacion: {
                    ciudad: "Madrid",
                    pais: "España"
                }
            },
            {   
                codigoArt: 2,
                titulo: "Vacaciones en Londres",
                texto: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt qui fugit possimus placeat, similique amet iste suscipit quae omnis",
                url: "http://www.gmail.com",
                ubicacion: {
                    ciudad: "Londres",
                    pais: "Reino Unido"
                }
            },
        ],
        permitirAnadirEntrada: false,
        verEntrada: false
    }
    },
    methods: {
        muestraNumArticulos(){
            return this.entradas.length;
        },
        cambiarVisibilidad(){
            this.verEntrada =! this.verEntrada;
        }
    },
    computed:{
        entradasDeEspana(){
            return this.entradas.filter((ent)=> ent.ubicacion.pais=="España");
        }
    }
}).mount('#app')