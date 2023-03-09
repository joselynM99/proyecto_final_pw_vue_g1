<template>
  <div class="container mt-5">
    <h1>Retirar vehículo sin reserva</h1>
    <hr>
    <BuscarVehiculosDisponibles class="my-5"/>
    <hr>
    <ReservarVehiculo class="my-5"/>
    <hr>
    <RetirarunVehiculoReservado class="my-5"/>
  </div>
</template>

<script>
import BuscarVehiculosDisponibles from '../cliente/BuscarVehiculosDisponibles.vue';
import ReservarVehiculo from '../cliente/ReservarVehiculo.vue';
import RetirarunVehiculoReservado from './RetirarunVehiculoReservado.vue';
export default {
  components: {
    BuscarVehiculosDisponibles,
    ReservarVehiculo,
    RetirarunVehiculoReservado
  }
}
</script>

<style>

</style>