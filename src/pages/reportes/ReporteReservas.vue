<template>
  <div class="container">
    <h1>Reporte de Reservas</h1>
    <div class="encabezado">
      <div class="form-floating mb-3">
        <input v-model="fechaInicio" class="form-control" type="date" placeholder="ini" />
        <label>Fecha inicio reserva: </label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="fechaFinal" class="form-control" type="date" placeholder="final" />
        <label>Fecha fin reserva: </label>
      </div>
      <button class="btn btn-primary" type="submit" v-on:click="crearReporteReservas">Buscar</button>
    </div>

    <div class="resultados">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th colspan="5">Reserva</th>
            <th colspan="2">Cliente</th>
            <th colspan="3">Vehículo</th>
          </tr>
          <tr>
            <th>Id</th>
            <th>Número</th>
            <th>Fecha Inicio</th>
            <th>Fecha Final</th>
            <th>Estado</th>
            <th>Apellido</th>
            <th>Cédula</th>
            <th>Placa</th>
            <th>Marca</th>
            <th>Valor por día</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listReservas" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.numero }}</td>
            <td>{{ item.fechaInicio }}</td>
            <td>{{ item.fechaFinal }}</td>
            <td>{{ item.estado }}</td>
            <td>{{ item.apellido }}</td>
            <td>{{ item.cedula }}</td>
            <td>{{ item.placa }}</td>
            <td>{{ item.marca }}</td>
            <td>{{ item.valorPorDia }}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
import { crearReporteVehiculosFachada } from '@/js/api_reservas/procesarReportes';

export default {
  data() {
    return {
      listReservas: null,
      fechaFinal: null,
      fechaInicio: null
    }
  }, methods: {
    async crearReporteReservas() {
      this.listReservas = await crearReporteVehiculosFachada(this.fechaInicio, this.fechaFinal)
      console.log(this.listReservas);
    }
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
