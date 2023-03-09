<template>
  <h1>Reporte de Clientes VIP</h1>

  <div id="cont1">
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Cédula</th>
          <th>Valor IVA</th>
          <th>Valor Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in clientesVIP" :key="c.cedula">
          <td>{{ c.nombre }}</td>
          <td>{{ c.apellido }}</td>
          <td>{{ c.cedula }}</td>
          <td>{{ c.valorIVA }}</td>
          <td>{{ c.valorTotal }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { reporteClientesVIPFachada } from '@/js/api_reservas/ProcesarReportes';
export default {
  data() {
    return {
      clientesVIP: []
    }
  },
  mounted() {
    this.reporteClientesVIP()
  },

  methods: {
    async reporteClientesVIP() {
      this.clientesVIP = await reporteClientesVIPFachada()
      console.log(this.clientesVIP);
    }

  },
}
</script>

<style>
#cont1 {
  margin: 10px auto;
  width: 1200px;

}

h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-top: 15px;
}
</style>