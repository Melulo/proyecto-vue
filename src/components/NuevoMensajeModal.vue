<template>
  <div class="modal-backdrop">
    <div class="modal-content">
      <h3>Nuevo Mensaje</h3>
      <input v-model="form.destinatario" placeholder="Destinatario" />
      <input v-model="form.titulo" placeholder="Título" />
      <textarea v-model="form.contenido" placeholder="Contenido"></textarea>

      <button @click="enviar">Enviar</button>
      <button @click="$emit('close')">Cancelar</button>
    </div>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  data() {
    return {
      form: { destinatario: '', titulo: '', contenido: '' }
    };
  },
  methods: {
    enviar() {
      if (!this.form.destinatario || !this.form.titulo || !this.form.contenido) {
        alert('Todos los campos son obligatorios');
        return;
      }
      store.mensajes.push({
        ...this.form,
        fecha: new Date().toLocaleString()
      });
      this.$emit('close');
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
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: rgb(0, 0, 0);
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
}
</style>
