<template>
  <h1>Retirarun vehículo reservado</h1>
  <div class="container">
    <label for="reserva">Número de reserva:</label>
    <input type="text" name="reserva" id="reserva" v-model="numeroReserva">
    <button @click="buscarVehiculo">Buscar</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Placa</th>
          <th scope="col">Modelo</th>
          <th scope="col">Estado</th>
          <th scope="col">Fecha</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{{ vehiculo.placa }}</th>
          <td>{{ vehiculo.modelo }}</td>
          <td>{{ vehiculo.estado }}</td>
          <td>{{ `${vehiculo.fechaInicio} - ${vehiculo.fechaFinal}` }}</td>
          <td>
            <button @click="registrarRetiro">Retirar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import { buscarVehiculoPorNumeroDeReserva, actualizarEstadoVehiculo } from "@/js/vehiculo.js"
export default {
  data() {
    return {
      numeroReserva: null,
      vehiculo: {
        numero: '',
        placa: '',
        modelo: '',
        estado: '',
        fechaInicio: '',
        fechaFinal: '',
      }
    }
  },
  methods: {
    buscarVehiculo() {
      buscarVehiculoPorNumeroDeReserva(this.numeroReserva).then(r => this.vehiculo = r)
    },
    registrarRetiro() {
      actualizarEstadoVehiculo(this.numeroReserva)
      this.vehiculo.estado = 'N'
    }
  }
}
</script>

<style></style>