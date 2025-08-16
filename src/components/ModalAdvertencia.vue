<template>
  <div v-if="mostrar" class="modal-backdrop" @click.self="$emit('cerrar')">
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
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
}
</style>
