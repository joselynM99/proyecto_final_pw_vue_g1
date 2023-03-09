<template>
  <div class="container mt-5">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="vehiculo.id">
      <label for="">Id:</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="vehiculo.placa">
      <label for="">Placa:</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="vehiculo.modelo">
      <label for="">Modelo:</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="vehiculo.marca">
      <label for="">Marca:</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="vehiculo.anioFabricacion">
      <label for="">Año de fabricación:</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="vehiculo.pais">
      <label for="">Pais:</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="vehiculo.cilindraje">
      <label for="">Cilindraje:</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="vehiculo.avaluo">
      <label for="">Avaluo:</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="vehiculo.valorPorDia">
      <label for="">Valor por dia:</label>
    </div>
    <div class="form-floating mb-5">
      <input type="text" class="form-control" v-model="vehiculo.estado">
      <label for="">Estado:</label>
    </div>
    <router-link to="/empleado/vehiculo">
      <button class="btn btn-warning mb-5" @click="actualizar">Actualizar</button>
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
