<template>
  <div class="container mt-5">
    <h1>Retirar vehículo reservado</h1>
    <div class="form-floating mb-3">
      <input type="text" name="reserva" id="reserva" class="form-control" v-model="numeroReserva">
      <label for="reserva">Número de reserva:</label>
    </div>
    <button class="btn btn-primary" @click="buscarVehiculo">
      <i class="bi bi-search"></i>
      Buscar
    </button>
    <div v-if="vehiculo.numero != ''">
      <table class="table mt-5">
        <thead class="table-dark">
          <tr>
            <th scope="col">Placa</th>
            <th scope="col">Modelo</th>
            <th scope="col">Estado</th>
            <th scope="col">Fecha</th>
            <th scope="col">Reservado por</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{{ vehiculo.placa }}</th>
            <td>{{ vehiculo.modelo }}</td>
            <td>{{ vehiculo.estado }}</td>
            <td>{{ `${vehiculo.fechaInicio.substring(0, 10)} - ${vehiculo.fechaFinal.substring(0, 10)}` }}</td>
            <td>{{ vehiculo.cedula }}</td>
            <td>
              <button class="btn btn-primary" @click="registrarRetiro">Retirar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
        cedula: '',
      }
    }
  },
  methods: {
    buscarVehiculo() {
      buscarVehiculoPorNumeroDeReserva(this.numeroReserva).then(r => this.vehiculo = r)
    },
    registrarRetiro() {
      actualizarEstadoVehiculo(this.numeroReserva)
      this.vehiculo.estado = 'ND'
    }
  }
}
</script>

<style></style>