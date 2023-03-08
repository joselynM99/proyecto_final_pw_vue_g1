<template>
    <div class="container">
        <table>
        <tr>
            <th>Id:</th>
            <td>{{ vehiculo.id }}</td>
        </tr>
        <tr>
            <th>Placa:</th>
            <td>{{ vehiculo.placa }}</td>
        </tr>
        <tr>
            <th>Modelo:</th>
            <td>{{ vehiculo.modelo }}</td>
        </tr>
        <tr>
            <th>Marca:</th>
            <td>{{ vehiculo.marca }}</td>
        </tr>
        <tr>
            <th>Año de fabricación:</th>
            <td>{{ vehiculo.anioFabricacion }}</td>
        </tr>
        <tr>
            <th>Pais:</th>
            <td>{{ vehiculo.pais }}</td>
        </tr>
        <tr>
            <th>Cilindraje:</th>
            <td>{{ vehiculo.cilindraje }}</td>
        </tr>
        <tr>
            <th>Avaluo:</th>
            <td>{{ vehiculo.avaluo }}</td>
        </tr>
        <tr>
            <th>Valor por dia:</th>
            <td>{{ vehiculo.valorPorDia }}</td>
        </tr>
        <tr>
            <th>Estado:</th>
            <td>{{ vehiculo.estado }}</td>
        </tr>
    </table>
    </div>
</template>

<script>
import { buscarVehiculoPorId } from "@/js/vehiculo.js"

export default {
    data() {
        return {
            vehiculo: {
                id: 0,
                placa: '',
                modelo: '',
                marca: '',
                anioFabricacion: '',
                pais: '',
                cilindraje: '',
                avaluo: 0.0,
                valorPorDia: 0.0,
                estado: '',
            }
        }
    },
    mounted() {
        buscarVehiculoPorId(this.$route.params.id).then(r => this.vehiculo = r)
    }
}
</script>

<style></style>