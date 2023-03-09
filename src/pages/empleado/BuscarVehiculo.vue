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
    <Mensaje class="my-3" v-if="msg" :tipoAlerta="msg.tipoAlerta" :mensaje="msg.mensaje" :mensajeAdicional="msg.adicional"/>
    <div v-if="listaDeVehiculos.length != 0">
      <table class="table mt-5">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Placa</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(vehiculo, index) in listaDeVehiculos" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ vehiculo.marca }}</td>
            <td>{{ vehiculo.modelo }}</td>
            <td>{{ vehiculo.placa }}</td>
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
import Mensaje from "@/components/Mensaje.vue"
import { buscarVehiculosPorMarca, borrarVehiculoPorId } from "@/js/vehiculo.js"
export default {
  data() {
    return {
      listaDeVehiculos: [],
      marca: '',
      msg: null,
    }
  },
  components: {
    Mensaje 
  },
  methods: {
    async buscarVehiculo() {
      try {
        this.listaDeVehiculos = await buscarVehiculosPorMarca(this.marca)
      } catch(err) {
        this.msg = {
          tipoAlerta: 'info',
          mensaje: 'Vehículo no encontrado',
          adicional: `No se encontré ningún vehículo de la marca ${this.marca}`,
        }
      }
    },
    async borrar(id) {
      borrarVehiculoPorId(id)
      this.msg = {
        tipoAlerta: 'danger',
        mensaje: 'Vehículo eliminado',
        adicional: 'Actualice la pagina por favor',
      }
    }
  }
}
</script>

<style></style>