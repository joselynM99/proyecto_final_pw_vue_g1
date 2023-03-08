<template>
  <div class="container mt-5">
    <h1>Buscar vehiculo</h1>
    <div class="form-floating mb-3">
      <input type="text" name="marca" id="marca" class="form-control" v-model="marca">
      <label for="marca">Marca:</label>
    </div>
    <button class="btn btn-primary" @click="buscarVehiculo">
      <i class="bi bi-search"></i>
      Buscar
    </button>
    <div v-if="listaDeVehiculos.length != 0">
      <table class="table mt-5">
        <thead class="table-dark">
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
              <router-link :to="{ name: 'visualizar-vehiculo', params: { id: vehiculo.id } }">
                <button class="btn btn-primary me-3">
                  <i class="bi bi-eye"></i>
                  Ver
                </button>
              </router-link>
              <router-link :to="{ name: 'actualizar-vehiculo', params: { id: vehiculo.id } }">
                <button class="btn btn-warning me-3">
                  <i class="bi bi-arrow-clockwise"></i>
                  Actualizar
                </button>
              </router-link>
              <button class="btn btn-danger" @click="borrar(vehiculo.id)">
                <i class="bi bi-trash"></i>
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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