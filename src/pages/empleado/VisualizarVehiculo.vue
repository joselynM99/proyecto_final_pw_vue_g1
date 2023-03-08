<template>
  <div class="mt-5">
    <div class="grid-container bg-light">
      <div class="text-start fw-bold">Id:</div>
      <div class="text-start">{{ vehiculo.id }}</div>
      <div class="text-start fw-bold">Placa:</div>
      <div class="text-start">{{ vehiculo.placa }}</div>
      <div class="text-start fw-bold">Modelo:</div>
      <div class="text-start">{{ vehiculo.modelo }}</div>
      <div class="text-start fw-bold">Marca:</div>
      <div class="text-start">{{ vehiculo.marca }}</div>
      <div class="text-start fw-bold">Año de fabricación:</div>
      <div class="text-start">{{ vehiculo.anioFabricacion }}</div>
      <div class="text-start fw-bold">Pais:</div>
      <div class="text-start">{{ vehiculo.pais }}</div>
      <div class="text-start fw-bold">Cilindraje:</div>
      <div class="text-start">{{ vehiculo.cilindraje }}</div>
      <div class="text-start fw-bold">Avaluo:</div>
      <div class="text-start">{{ vehiculo.avaluo }}</div>
      <div class="text-start fw-bold">Valor por dia:</div>
      <div class="text-start">{{ vehiculo.valorPorDia }}</div>
      <div class="text-start fw-bold">Estado:</div>
      <div class="text-start">{{ vehiculo.estado }}</div>
    </div>
  </div>
</template>

<script>
import { buscarVehiculoPorId } from "@/js/vehiculo.js"

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
  }
}
</script>

<style></style>