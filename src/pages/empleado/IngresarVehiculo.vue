<template>
  
  <fieldset>
    <legend>Ingresar vehiculo</legend>
    <div class="input-group mb-3">
        <span class="input-group-text" id="inicio">Placa:</span>
        <input type="text" class="form-control" v-model="placa" />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inicio">Marca:</span>
        <input type="text" class="form-control" v-model="marca" />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inicio">Modelo:</span>
        <input type="text" class="form-control" v-model="modelo"  />
      </div>
             
      <div class="input-group mb-3">
        <span class="input-group-text">Año de fabricación:</span>
        <input type="text" class="form-control" v-model="anioFabricacion" />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">País de fabricación:</span>
        <input type="text" class="form-control" v-model="paisFabricacion" />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Cilindraje:</span>
        <input type="text" class="form-control" v-model="cilindraje" />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Precio Vehículo:</span>
        <input type="text" class="form-control" v-model="precioVehiculo" required/>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Valor por día:</span>
        <input type="text" class="form-control" v-model="valorDia" required/>
      </div>
      <button type="button" class="btn btn-outline-success" @click="registrar">
        INGRESAR VEHÍCULO
      </button>
      <br />
      <br />
      <div v-if="mensaje" class="alert alert-info" role="alert">
        {{ mensaje }}
      </div>
  </fieldset>
</template>

<script>

import {registrarVehiculoFachada} from"@/js/procesarVehiculo"
export default {
data(){
  return{
    placa:null,
    modelo:null,
    marca:null,
    anioFabricacion:null,
    paisFabricacion:null,
    cilindraje:null,
    precioVehiculo:null,
    valorDia:null,
    ninguno:true,
    mensaje:"",
  }
},
methods:{
  async registrar(){
    const vehiculo={
      placa:this.placa,
      modelo:this.modelo,
      marca:this.marca,
      anioFabricacion:this.anioFabricacion,
      pais:this.paisFabricacion,
      cilindraje:this.cilindraje,
      avaluo:this.precioVehiculo,
      valorPorDia:this.valorDia,
    }

    const response=await registrarVehiculoFachada(vehiculo);
    this.placa=null,
    this.modelo=null,
    this.marca=null,
    this.anioFabricacion=null,
    this.paisFabricacion=null,
    this.cilindraje=null,
    this.precioVehiculo=null,
    this.valorDia=null

    if (response == "Vehiculo ingresado correctamente") {
          this.mensaje = response;
        } else {
          this.mensaje = "No se ha podido registrar, intente de nuevo";
        }
  }
}
}
</script>

<style scope>
fieldset {
  height: fit-content;
  width: fit-content;
  margin: auto;
}
</style>