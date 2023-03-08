<template>
  <div class="container">
    <div>
      <label for="">Id:</label>
      <input type="text" v-model="vehiculo.id">
    </div>
    <div>
      <label for="">Placa:</label>
      <input type="text" v-model="vehiculo.placa">
    </div>
    <div>
      <label for="">Modelo:</label>
      <input type="text" v-model="vehiculo.modelo">
    </div>
    <div>
      <label for="">Marca:</label>
      <input type="text" v-model="vehiculo.marca">
    </div>
    <div>
      <label for="">Año de fabricación:</label>
      <input type="text" v-model="vehiculo.anioFabricacion">
    </div>
    <div>
      <label for="">Pais:</label>
      <input type="text" v-model="vehiculo.pais">
    </div>
    <div>
      <label for="">Cilindraje:</label>
      <input type="text" v-model="vehiculo.cilindraje">
    </div>
    <div>
      <label for="">Avaluo:</label>
      <input type="text" v-model="vehiculo.avaluo">
    </div>
    <div>
      <label for="">Valor por dia:</label>
      <input type="text" v-model="vehiculo.valorPorDia">
    </div>
    <div>
      <label for="">Estado:</label>
      <input type="text" v-model="vehiculo.estado">
    </div>
    <router-link to="/empleado/vehiculo">
      <button @click="actualizar">Actualizar</button>
    </router-link>
  </div>
</template>

<script>
import { buscarVehiculoPorId, actualizarVehiculo } from "@/js/vehiculo.js"
export default {
  data() {
    return {
      vehiculo: {
        id: 0,
        placa: '',
        modelo: '',
        marca: '',
        anioFabricacion: '',
        pais: '',
        cilindraje: '',
        avaluo: 0.0,
        valorPorDia: 0.0,
        estado: '',
      }
    }
  },
  mounted() {
    buscarVehiculoPorId(this.$route.params.id).then(r => this.vehiculo = r)
  },
  methods: {
    actualizar() {
      actualizarVehiculo(this.vehiculo)
    }
  }
}
</script>

<style></style>
