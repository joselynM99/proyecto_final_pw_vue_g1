<template>
  <fieldset>
    <legend>Informacion del Cliente</legend>
    <table class="table table-bordered border-danger" >
      <tr >
        <th  >ID</th>
        <td>{{ cliente.id }}</td>
      </tr>
      <tr >
        <th  >Nombre</th>
        <td >{{ cliente.nombre }}</td>
      </tr>
      <tr >
        <th  >Apellido</th>
        <td >{{ cliente.apellido }}</td>
      </tr>
      <tr >
        <th  >Cedula</th>
        <td >{{ cliente.cedula }}</td>
      </tr>
      <tr >
        <th  >Genero</th>
        <td >{{ cliente.genero }}</td>
      </tr>
      <tr >
        <th  >Tipo de Registro</th>
        <td >{{ cliente.tipoRegistro }}</td>
      </tr>
      <tr >
        <th  >Fecha Nacimiento</th>
        <td >{{ cliente.fechaNacimiento }}</td>
      </tr>
    </table>

    <div>
      <router-link to="/empleado/cliente">
        <button type="button" class="btn btn-outline-success">Regresar</button>
      </router-link>
    </div>
  </fieldset>
</template>

<script>
import { buscarClientePorIdFachada } from "@/js/api_reservas/ProcesarEmpleado";
export default {
  data() {
    return {
      cliente: {
        id: null,
        nombre: null,
        apellido: null,
        cedula: null,
        genero: null,
        tipoRegistro: null,
        fechaNacimiento: null,
      },
    };
  },
  mounted() {
    buscarClientePorIdFachada(this.$route.params.id).then(
      (r) => (this.cliente = r)
    );
  },
};
</script>

<style scope>
fieldset {
  height: fit-content;
  width: fit-content;
  margin: auto;
}

td{
    background-color:  beige;
}

th{
    background-color: rgb(225, 220, 220);
}


</style>