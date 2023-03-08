<template>
  <h1>Registrarse como cliente</h1>
  <form>
    <div id="cont1">
      <div v-if="registroExitoso" class="alert alert-success" role="alert">
        Registro exitoso
      </div>
      <div class="form-floating">
        <input class="form-control" required="" placeholder="Nombre" v-model="nombre">
        <label for="">Nombre</label>
      </div>
      <div class="form-floating">
        <input class="form-control" required="" placeholder="Apellido" v-model="apellido">
        <label>Apellido</label>
      </div>
      <div class="form-floating">
        <input class="form-control" required="" placeholder="Cédula" v-model="cedula">
        <label>Cédula</label>
      </div>
      <div class="form-floating">
        <input type="date" class="form-control" required="" placeholder="Fecha de Nacimiento" v-model="fechaNacimiento">
        <label>Fecha</label>
      </div>

      <div class="form-floating">
        <select class="form-select" required="" aria-label="Default select example" v-model="genero">
          <option value="Femenino">Femenino</option>
          <option value="Masculino">Masculino</option>
          <option value="Otro">Otro</option>
        </select>
        <label>Género</label>
      </div>

      <div class="form-floating">
        <input class="form-control" value="E" id="tipoR" disabled readonly>
        <label id="lab" for="tipoR">Tipo de registro</label>
      </div>

      <button type="submit" v-on:click="registrarCliente" class="btn btn-success">Registrar</button>

    </div>
  </form>
</template>

<script>
import { registrarClienteFachada } from '@/js/api_reservas/ProcesarEmpleado'


export default {

  data() {
    return {
      nombre: null,
      apellido: null,
      cedula: null,
      genero: null,
      fechaNacimiento: null,
      tipoRegistro: 'E',
      registroExitoso: false,
    }
  },

  methods: {
    registrarCliente() {

      if (this.nombre !== null && this.apellido !== null && this.cedula !== null && this.genero !== null && this.fechaNacimiento !== null) {
        const cliente = {
          nombre: this.nombre,
          apellido: this.apellido,
          cedula: this.cedula,
          fechaNacimiento: this.fechaNacimiento,
          genero: this.genero,
          tipoRegistro: this.tipoRegistro,
        }

        registrarClienteFachada(cliente)

        this.nombre = null
        this.apellido = null
        this.cedula = null
        this.genero = null
        this.fechaNacimiento = null
        this.tipoRegistro = 'E'
        this.registroExitoso = true
      }
    }

  },

  reinicio() {
    location.reload()
  }

}
</script>

<style>
#cont1 {
  margin: 10px auto;
  width: 400px;

}

.form-floating {
  margin-top: 25px;
  height: 40px;

}

h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-top: 15px;
}

button {
  margin-top: 30px;
}
</style>