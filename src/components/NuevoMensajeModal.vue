<template>
  <Modal @close="$emit('close')">
    <h3>Nuevo Mensaje</h3>
    <div>
      <label>Destinatario:</label>
      <input v-model="form.destinatario" />
    </div>
    <div>
      <label>Título:</label>
      <input v-model="form.titulo" />
    </div>
    <div>
      <label>Contenido:</label>
      <textarea v-model="form.contenido"></textarea>
    </div>
    <button @click="enviar">Enviar</button>
    <button @click="$emit('close')">Cancelar</button>
  </Modal>
</template>

<script>
import Modal from './ModalAdvertencia.vue';
import { store } from '../store';

export default {
  components: { Modal },
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
};
</script>
