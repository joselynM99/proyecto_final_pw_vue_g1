<template>
  <h1>Buscar vehiculo</h1>
  <div class="container">
    <label for="marca">Marca</label>
    <input type="text" name="marca" id="marca" v-model="marca">
    <button @click="buscarVehiculo">Buscar</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Marca</th>
          <th scope="col">Modelo</th>
          <th scope="col">Valor por dia</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(vehiculo, index) in listaDeVehiculos" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ vehiculo.marca }}</td>
          <td>{{ vehiculo.modelo }}</td>
          <td>{{ vehiculo.valorPorDia }}</td>
          <td>
            <router-link :to="{ name: 'visualizar-vehiculo', params: {id: vehiculo.id} }">
              <button>Ver</button>
            </router-link>
            <router-link :to="{ name: 'actualizar-vehiculo', params: {id: vehiculo.id} }">
              <button>Actualizar</button>
            </router-link>
            <button @click="borrar(vehiculo.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { buscarVehiculosPorMarca, borrarVehiculoPorId } from "@/js/vehiculo.js"
export default {
  data() {
    return {
      listaDeVehiculos: [],
      marca: '',
    }
  },
  methods: {
    async buscarVehiculo() {
      this.listaDeVehiculos = await buscarVehiculosPorMarca(this.marca)
    },
    async borrar(id) {
      borrarVehiculoPorId(id)
    }
  }
}
</script>

<style></style>