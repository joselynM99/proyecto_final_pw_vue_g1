<template>
  <div :class="'alert alert-' + tipoAlerta">
    <strong>{{ mensaje }} </strong>
    <br v-if="mensajeAdicional">
    {{ mensajeAdicional }} 
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    mensaje: null,
    mensajeAdicional: null,
    tipoAlerta: null,
  },
};
</script>
<style></style>
