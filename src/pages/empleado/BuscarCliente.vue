<template>
 <fieldset>
  <legend>Buscar Cliente</legend>
  <div>
    <span class="input-group-text" id="apellido">Ingrese el apellido a buscar:</span>
      <input type="text" class="form-control" v-model="apellido" />
  </div>
  <div>
    <button  id="buscar" type="button"  class="btn btn-outline-info" @click="consultar">
      BUSCAR
    </button>
  </div>
  <br />
    <div v-if="mensaje" class="alert alert-info" role="alert">
      {{ mensaje }}
    </div>
    <br />
    <div v-if="mensaje2" class="alert alert-info" role="alert">
      {{ mensaje2 }}
    </div>


    <div v-if="mostrar">
      <table class="table">
        <thead class="table-dark">
          <tr>
             <th scope="col">ID</th>
            <th scope="col">APELLIDO</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">CEDULA</th>
            <th scope="col">FECHA NACIMIENTO</th>
            <th scope="col">GENERO</th>
            <th scope="col">REGISTRO</th>
             <th scope="col"> OPCIONES</th>
            

          </tr>

        </thead>
        <tbody class="table-info">
          <tr v-for="cliente in lista" v-bind:key="cliente">
              <td>{{ cliente.id }}</td>
            <td>{{ cliente.apellido }}</td>
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.cedula }}</td>
            <td>{{ cliente.fechaNacimiento }}</td>
            <td>{{ cliente.genero }}</td>
            <td>{{ cliente.tipoRegistro }}</td>
            <td>
              <router-link :to="{name: 'visualizar-cliente', params:{id:cliente.id}}">
                <button type="button"  class="btn btn-outline-success">Observar</button>
              </router-link>
              <router-link :to="{name:'actualizar-cliente',params:{id:cliente.id}}"> 
                <button type="button"  class="btn btn-outline-primary">Actualizar</button>
              </router-link >
              <button type="button"  class="btn btn-outline-danger" @click="borrar(cliente.id)">Eliminar</button>
            </td>
            
            
          </tr>

        </tbody>
        
      </table>

    </div>
 </fieldset>
</template>

<script>
import {listaClientesApellido, borrarClientePorIdFachada} from "@/js/gestorEmpleado";
export default {

  data(){
    return{
      lista:[],
      apellido:null,
      mostrar:false,
      mensaje:"",
      mensaje2:"",
    };
  },
  methods:{
    async consultar(){
      const response=await listaClientesApellido(this.apellido);
      this.apellido=null;
      this.lista=response;
      console.log(this.lista);
      if(this.lista.length==0){
        this.mensaje="No hay resultados";
        this.mostrar=false;
      }
      else{
        this.mensaje="";
        this.mostrar=true;
      }
    },
    async borrar(id){

      const response=await borrarClientePorIdFachada(id)
       if (response == "Cliente eliminado correctamente") {
          this.mensaje = response;
        } else {
          this.mensaje = "No se ha podido eliminar";
        }


    }
  },


};
</script>

<style scope>
fieldset {
  margin: auto;
}

#table {
  width: fit-content;
  height: fit-content;
}

#buscar{
  margin-top: 20px;
  margin-bottom: 20px;
}

button{
  margin-right: 10px;
}
</style>