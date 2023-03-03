<template >
    <div>
        <div class="form-floating mb-3">
            <input v-model="placa" class="form-control" type="text" placeholder="Placa del vehiculo" />
            <label>Placa: </label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="cedula" class="form-control" type="text" placeholder="cedula" />
            <label>Cédula: </label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="fechaInicio" class="form-control" type="datetime-local"
                placeholder="Fecha inicio de la reserva" />
            <label>Fecha inicio reserva: </label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="fechaFinal" class="form-control" type="datetime-local"
                placeholder="Fecha final de la reserva" />
            <label>Fecha fin reserva: </label>
        </div>
        <button class="btn btn-primary" type="submit" v-on:click="reservar">Buscar</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            placa: null,
            cedula: null,
            fechaInicio: null,
            fechaFinal: null
        }
    },
    methods: {
        reservar() {

        }
    },
}
</script>
<style ></style>