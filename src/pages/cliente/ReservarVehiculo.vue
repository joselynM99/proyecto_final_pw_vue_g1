<template>
  <div class="container">
    <h1>Reservar Vehiculo:</h1>
    <div class="form-floating mb-3">
      <input v-model="placa" class="form-control" type="text" placeholder="vehiculo" />
      <label>Placa: </label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="cedula" class="form-control" type="text" placeholder="cedula" />
      <label>Cédula: </label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="fechaInicio" class="form-control" type="date" placeholder="ini" />
      <label>Fecha inicio reserva: </label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="fechaFinal" class="form-control" type="date" placeholder="final" />
      <label>Fecha fin reserva: </label>
    </div>
    <button class="btn btn-primary" type="submit" v-on:click="revisarDisponibilidad">
      Buscar
    </button>
    <Mensaje :tipoAlerta="tipoAlerta" :mensaje="mensaje"> </Mensaje>

    <div v-if="tipoAlerta == 'success'">
      <div class="form-floating mb-3">
        <input v-model="valorTotal" class="form-control" type="text" placeholder="total" disabled />
        <label>Valor Total $: </label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="tarjeta" class="form-control" type="text" placeholder="tarjeta" />
        <label>Número de tarjeta: </label>
      </div>
      <button class="btn btn-primary" type="submit" v-on:click="reservar">
        Reservar
      </button>
    </div>
    <Mensaje v-if="msg" :tipoAlerta="msg.tipoAlerta" :mensaje="msg.mensaje" :mensajeAdicional="msg.adicional">
    </Mensaje>
  </div>

</template>

<script>
import Mensaje from "@/components/Mensaje.vue";
import { reservarFachada } from "@/js/api_reservas/ProcesarReserva";
import { revisarDisponibilidadFachada } from "@/js/api_reservas/ProcesarVehiculo";
export default {
  data() {
    return {
      placa: null,
      cedula: null,
      fechaInicio: null,
      fechaFinal: null,
      valorTotal: null,
      tipoAlerta: null,
      mensaje: null,
      msg: null,
      tarjeta: null,
    };
  },
  methods: {
    async reservar() {
      const body = {
        placa: this.placa,
        cedula: this.cedula,
        fechaInicio: this.fechaInicio,
        fechaFinal: this.fechaFinal,
        tarjeta: this.tarjeta,
      };
      this.msg = await reservarFachada(body);
      this.limpiarCampos()
    },
    async revisarDisponibilidad() {
      this.msg = null
      const data = await revisarDisponibilidadFachada(
        this.placa,
        this.fechaInicio,
        this.fechaFinal
      );
      this.mostrarMensaje(data.estado);
      this.valorTotal = data.valorTotalPagar;
    },
    mostrarMensaje(tmp) {
      if (tmp == "D") {
        this.tipoAlerta = "success";
        this.mensaje = "Vehiculo disponible!! ";
      } else {
        this.tipoAlerta = "danger";
        this.mensaje = "Vehiculo NO disponible!! ";
      }
    },
    limpiarCampos() {
      this.placa = null
      this.cedula = null
      this.fechaInicio = null
      this.fechaFinal = null
      this.tipoAlerta = null
      this.mensaje = null
      this.tarjeta = null
    }
  },
  components: { Mensaje },
};
</script>
<style ></style>
