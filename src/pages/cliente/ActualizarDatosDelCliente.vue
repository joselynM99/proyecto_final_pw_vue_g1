<template>
  <h1>Actualizar datos</h1>
  <div id="cont1">
    <div v-if="clienteNoEncontrado" class="alert alert-warning" role="alert">
      No se ha encontrado cliente con cedula: {{ this.cedula }}
    </div>

    <div v-if="error" class="alert alert-success" role="alert">
        Ha ocurrido un error al actualizar los datos
      </div>
    <div class="form-floating">
      <input class="form-control" placeholder="Cedula de Cliente" v-model="cedula">
      <label for="">Cedula de Cliente</label>
    </div>

    <button type="button" v-on:click="buscarCliente" class="btn btn-success">Buscar</button>

    <form>
      <div v-if="registroExitoso" class="alert alert-success" role="alert">
        Datos actualizados con éxito
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
        <input class="form-control" required="" placeholder="Cédula" v-model="cedula" disabled readonly>
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
        <input class="form-control" v-model="tipoRegistro" id="tipoR" disabled readonly>
        <label id="lab" for="tipoR">Tipo de registro</label>
      </div>

      <button type="submit" v-on:click="actualizarCliente" class="btn btn-success">Actualizar</button>


    </form>
  </div>
</template>

<script>
import { actualizarClienteFachada, buscarClienteFachada } from '@/js/api_reservas/ProcesarCliente'


export default {

  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
      cedula: null,
      genero: null,
      fechaNacimiento: null,
      tipoRegistro: null,
      registroExitoso: false,
      clienteNoEncontrado: false,
      error:false
    }
  },

  methods: {
   async actualizarCliente() {

      if (this.nombre !== null && this.apellido !== null && this.cedula !== null && this.genero !== null && this.fechaNacimiento !== null) {
        const cliente = {
          id: this.id,
          nombre: this.nombre,
          apellido: this.apellido,
          cedula: this.cedula,
          fechaNacimiento: this.fechaNacimiento,
          genero: this.genero,
          tipoRegistro: this.tipoRegistro,
        }

        const a =await actualizarClienteFachada(this.id, cliente)

        if (a) {
          this.id = null
          this.nombre = null
          this.apellido = null
          this.cedula = null
          this.genero = null
          this.fechaNacimiento = null
          this.tipoRegistro = null
          this.registroExitoso = true
          this.error = false
        } else {
          this.registroExitoso = false
          this.error = true
        }

      }
    },

    async buscarCliente() {

      this.registroExitoso = false
      const data = await buscarClienteFachada(this.cedula)

      const { id, nombre, apellido, cedula, genero, fechaNacimiento, tipoRegistro } = data
      console.log(data);

      if (data == null || typeof id === 'undefined') {
        this.clienteNoEncontrado = true
      } else {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.cedula = cedula
        this.genero = genero
        this.fechaNacimiento = fechaNacimiento
        this.tipoRegistro = tipoRegistro
        this.clienteNoEncontrado = false
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