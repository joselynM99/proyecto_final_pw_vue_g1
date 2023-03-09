<template>
  
  <fieldset>
    <legend>Reporte de Vehículos VIP</legend>

    <div>
      <span class="input-group-text" id="inicio">Fecha inicio:</span>
      <input type="date" class="form-control" v-model="inicio" />
      <p>Se tomará en cuenta solo el mes y el año</p>
    </div>
    <div>
      <button type="button" class="btn btn-outline-success" @click="consultar">
        BUSCAR
      </button>
    </div>
    <br />
    <div v-if="mensaje" class="alert alert-info" role="alert">
      {{ mensaje }}
    </div>

    <div v-if="mostrar">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">PLACA</th>
            <th scope="col">MARCA</th>
            <th scope="col">MODELO</th>
            <th scope="col">VALOR SUBTOTAL</th>
            <th scope="col">VALOR TOTAL</th>
          </tr>
        </thead>
        <tbody class="table-info">
          <tr v-for="vehiculo in lista" v-bind:key="vehiculo">
            <td>{{ vehiculo.id }}</td>
            <td>{{ vehiculo.placa }}</td>
            <td>{{ vehiculo.marca }}</td>
            <td>{{ vehiculo.modelo }}</td>
            <td>{{ vehiculo.valorSubtotal }}</td>
            <td>{{ vehiculo.valorTotal }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </fieldset>
</template>

<script>
import { listaVehiculosVip } from "@/js/api_reservas/ProcesarReportes";
export default {
  data() {
    return {
      lista: [],
      inicio: null,
      mostrar: false,
      mensaje: "",
    };
  },
  methods: {
    async consultar() {
      const response = await listaVehiculosVip(this.inicio);
      this.lista = response;
      console.log(this.lista);
      if (this.lista.length == 0) {
        this.mensaje = "No hay resultados para la fecha ingresada";
        this.mostrar = false;
      } else {
        (this.mensaje = ""), (this.mostrar = true);
      }
    },
  },
};
</script>


<style scope>
fieldset {
  margin: auto;
}

#table {
  width: fit-content;
  height: fit-content;
}
</style>