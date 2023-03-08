<template>
  <h1>Reporte de Reservas</h1>
</template>
<script>
import {
  buscarVehiculoPorMarcaModeloFachada,
  obtenerTodasMarcasFachada,
  obtenerTodosModelosFachada,
} from "@/js/api_reservas/ProcesarVehiculo";
export default {

}
</script>
<style scoped>
.encabezado {
  display: grid;
  grid-template-columns: auto auto auto;
}

.encabezado div {
  margin: 10px 50px;
}

button {
  margin-top: 10px;
  width: 100px;
  height: 55px;
}
</style>
