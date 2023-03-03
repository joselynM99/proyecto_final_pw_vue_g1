<template >
    <div>
        <div class="form-floating mb-3">
            <input v-model="marca" class="form-control" type="text" placeholder="Marca del vehiculo" />
            <label>Marca: </label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="modelo" class="form-control" type="text" placeholder="Modelo del vehiculo" />
            <label>Modelo: </label>
        </div>
        <button class="btn btn-primary" type="submit" v-on:click="buscar">Buscar</button>
    </div>
</template>
<script>

import { buscarVehiculoPorMarcaModeloFachada } from '@/js/procesarVehiculo';
export default {
    data() {
        return {
            marca: null,
            modelo: null
        }
    },
    methods: {
        async buscar() {
            const data = await buscarVehiculoPorMarcaModeloFachada(this.marca, this.modelo)
        }
    },
}
</script>
<style ></style>