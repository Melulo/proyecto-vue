<template>
  <form @submit.prevent="registrar">
    <div>
      <label>Nombre:</label>
      <input v-model="form.nombre" :class="{ error: errores.includes('nombre') }" />
    </div>
    <div>
      <label>Email:</label>
      <input type="email" v-model="form.email" :class="{ error: errores.includes('email') }" />
    </div>
    <div>
      <label>Contraseña:</label>
      <input type="password" v-model="form.password" :class="{ error: errores.includes('password') }" />
    </div>
    <div>
      <button type="submit">Registrar</button>
      <button type="button" @click="resetear">Resetear</button>
      <router-link to="/">Inicio</router-link>
    </div>

    <Modal v-if="mostrarModal" @close="mostrarModal = false">
      <p>Todos los campos son obligatorios.</p>
      <button @click="mostrarModal = false">Cerrar</button>
    </Modal>
  </form>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: { Modal },
  data() {
    return {
      form: { nombre: '', email: '', password: '' },
      errores: [],
      mostrarModal: false
    };
  },
  methods: {
    registrar() {
      this.errores = Object.keys(this.form).filter(k => !this.form[k]);
      if (this.errores.length) {
        this.mostrarModal = true;
        return;
      }
      alert('Usuario registrado con éxito');
      this.resetear();
    },
    resetear() {
      this.form = { nombre: '', email: '', password: '' };
      this.errores = [];
    }
  }
};
</script>

<style scoped>
.error {
  border: 1px solid red;
}
</style>
