<template>
  <div class="container mt-5">
    <h1>Retirar vehículo reservado</h1>
    <div class="form-floating mb-3">
      <input
        type="text"
        name="reserva"
        id="reserva"
        class="form-control"
        v-model="numeroReserva"
      />
      <label for="reserva">Número de reserva:</label>
    </div>
    <button class="btn btn-primary" @click="buscarVehiculo">
      <i class="bi bi-search"></i>
      Buscar
    </button>
    
    <Mensaje
      class="my-3"
      v-if="msg"
      :tipoAlerta="msg.tipoAlerta"
      :mensaje="msg.mensaje"
      :mensajeAdicional="msg.adicional"
    />

    <div v-if="mensaje1" class="alert alert-info" role="alert">
      {{ mensaje1 }}
    </div>

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
            <td>
              {{
                `${vehiculo.fechaInicio.substring(
                  0,
                  10
                )} - ${vehiculo.fechaFinal.substring(0, 10)}`
              }}
            </td>
            <td>{{ vehiculo.cedula }}</td>
            <td>
              <button class="btn btn-primary" @click="registrarRetiro">
                Retirar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script>
import {
  buscarVehiculoPorNumeroDeReserva,
  actualizarEstadoVehiculo,
} from "@/js/vehiculo.js";
export default {
  data() {
    return {
      numeroReserva: null,
      vehiculo: {
        numero: "",
        placa: "",
        modelo: "",
        estado: "",
        fechaInicio: "",
        fechaFinal: "",
        cedula: "",
      },
      msg: null,
      mensaje1:null,
    };
  },

  methods: {
    buscarVehiculo() {
      try {
        buscarVehiculoPorNumeroDeReserva(this.numeroReserva).then(
          (r) => (this.vehiculo = r)
        );
      } catch (err) {
        this.msg = {
          tipoAlerta: "info",
          mensaje: "Vehículo no encontrado",
          adicional: `No se encontré ningún vehículo con el numero de reserva ${this.numeroReserva}`,
        };
      }
    },
    registrarRetiro() {
      actualizarEstadoVehiculo(this.numeroReserva);
      this.vehiculo.estado = "ND";
      this.mensaje1="Se actualizo el estado de del vehículo",

      this.msg = {
        tipoAlerta: "info",
        mensaje: "Se actualizo el estado de del vehículo",
        adicional: "Se actualizo el estado de del vehículo ",
      };
    },
  },
};
</script>

<style>
div{
  margin-top: 10px;
}
</style>