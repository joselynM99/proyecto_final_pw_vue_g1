<template>
  <fieldset>
    <legend>Actualizar Cliente</legend>

    <div id="mensaje" class="alert alert-info" role="alert">
      En caso de actualizarse correctamente sera redireccionado a la pantalla anterior
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text">Nombre:</span>
      <input type="text" class="form-control" v-model="cliente.nombre" />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">Apellido:</span>
      <input type="text" class="form-control" v-model="cliente.apellido" />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">Cedula:</span>
      <input type="text" class="form-control" v-model="cliente.cedula" />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">Genero:</span>
      <input type="text" class="form-control" v-model="cliente.genero" />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">Registro:</span>
      <input type="text" class="form-control" v-model="cliente.tipoRegistro" />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">Fecha de Nacimiento:</span>
      <input
        type="date"
        class="form-control"
        v-model="cliente.fechaNacimiento"
      />
    </div>
    <div>
      <router-link to="/empleado/cliente">
      <button type="button" class="btn btn-outline-success"  @click="actualizar">Actualizar</button>

       </router-link>
    </div>
    <br />
    <br />
    
  </fieldset>
</template>

<script>
import {
  actualizarClienteFachada,
  buscarClientePorIdFachada,
} from "@/js/gestorEmpleado.js";
export default {
  data() {
    return {
      cliente: {
        nombre: null,
        apellido: null,
        cedula: null,
        genero: null,
        tipoRegistro: null,
        fechaNacimiento: null,
        mensaje: "",
      },
    };
  },
  methods: {
    async actualizar() {
      const response = await actualizarClienteFachada(this.cliente);
      console.log(response);

      if (response == "Cliente actualizado correctamente") {
        this.mensaje = "Cliente actualizado correctamente";
      } else {
        this.mensaje = "No se pudo actualizar";
      }
    },
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

#mensaje{
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>