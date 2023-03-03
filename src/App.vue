<template>
  <!-- <BuscarVehiculoDesdeCliente /> -->
  <Navbar />
  <router-view />
  <ReservarVehiculo />
</template>

<script>
import Navbar from './components/Navbar.vue';
import HelloWorld from './components/HelloWorld.vue'
import BuscarVehiculoDesdeCliente from './pages/BuscarVehiculoDesdeCliente.vue';
import ReservarVehiculo from './pages/ReservarVehiculo.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    HelloWorld,
    BuscarVehiculoDesdeCliente,
    ReservarVehiculo
  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
