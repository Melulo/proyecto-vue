<template>
  <div class="modal-backdrop" v-if="mostrar">
    <div class="modal">
      <h3>{{ titulo }}</h3>
      <p>{{ mensaje }}</p>
      <button @click="$emit('cerrar')">Cerrar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalAdvertencia",
  props: {
    mostrar: { type: Boolean, required: true },
    titulo: { type: String, default: "Aviso" },
    mensaje: { type: String, default: "Esta funcionalidad aún no está disponible." }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex; justify-content: center; align-items: center;
}
.modal {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  max-width: 350px;
}
button {
  margin-top: 1rem;
}
</style>
