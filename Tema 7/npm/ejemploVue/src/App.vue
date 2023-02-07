<script setup>
// import pruebaVue from './components/prueba.vue';
// var variable = {
//     titulo: 'Prueba',
//     texto: 'esto es una prueba'
// };

// function evento(dato) {
//     console.log('Recibo Evento del componente pruebaVue con dato = ' + dato);
// }
</script>

<template>
    <header>
      <router-link to="/">
        hello world
      </router-link>

      <router-link to="/welcome">
        prueba
      </router-link>

      <img src="./assets/logo.svg" alt="" width="125">
    </header>

    <main>
      <router-view />
    </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
