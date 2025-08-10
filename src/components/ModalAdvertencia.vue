<template>
  <div v-if="mostrar" class="modal">
    <div class="modal-content">
      <slot>
        <h3>Advertencia</h3>
        <p>Ha ocurrido un error.</p>
      </slot>
      <button @click="$emit('cerrar')">Cerrar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalAdvertencia',
  props: {
    mostrar: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}
</style>

<ModalAdvertencia   :mostrar="mostrarError"   @cerrar="mostrarError = false">
  <template #default>
    <h3>Error de Inicio de Sesión</h3>
    <p>Por favor, complete ambos campos antes de continuar.</p>
  </template>
</ModalAdvertencia>
