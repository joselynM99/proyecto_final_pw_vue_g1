<template>
  <div :class="'alert alert-' + tipoAlerta">
    <strong>{{ mensaje }} </strong>{{ mensajeAdicional }}
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
