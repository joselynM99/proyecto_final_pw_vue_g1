<template>
  <div>
    <h1>Buscar Vehiculos disponibles:</h1>
    <div class="encabezado">
      <div class="form-floating mb-3">
        <select class="form-select" v-model="marca">
          <option v-for="item in listMarcas" v-bind:value="item">{{ item }}</option>
        </select>
        <label>Seleccione una Marca: </label>
      </div>

      <div class="form-floating mb-3">
        <select class="form-select" v-model="modelo">
          <option v-for="item in listModelos" v-bind:value="item">{{ item }}</option>
        </select>
        <label>Modelo: </label>
      </div>

      <button class="btn btn-primary" type="submit" v-on:click="buscar">Buscar</button>
    </div>

    <div v-if="listVehiculos">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Lista de Vehículos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listVehiculos" :key="index">
            <td>Placa: {{ item.placa }}</td>
            <td>Modelo: {{ item.modelo }}</td>
            <td>Marca: {{ item.marca }}</td>
            <td>Año: {{ item.anioFabricacion }}</td>
            <td>Estado: {{ item.estado }}</td>
            <td>Valor por día: {{ item.valor }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import {
  buscarVehiculoPorMarcaModeloFachada,
  obtenerTodasMarcasFachada,
  obtenerTodosModelosFachada,
} from "@/js/api_reservas/procesarVehiculo";

export default {
  data() {
    return {
      marca: null,
      modelo: null,
      listVehiculos: null,
      listMarcas: null,
      listModelos: null,
    };
  },
  methods: {
    async buscar() {
      this.listVehiculos = await buscarVehiculoPorMarcaModeloFachada(
        this.marca,
        this.modelo
      );
    },
    async cargarDatos() {
      this.listModelos = await obtenerTodosModelosFachada();
      this.listMarcas = await obtenerTodasMarcasFachada();
    },
  },
  mounted() {
    this.cargarDatos();
  },
};
</script>
<style scoped>
.encabezado {
  display: grid;
  grid-template-columns: auto auto auto;
}

.encabezado div {
  margin: 10px 50px;
}

button {
  margin-top: 10px;
  width: 100px;
  height: 55px;
}
</style>
