<template>
  <div>
    <h1>Mensajes</h1>
    <MensajeLista />
    <button @click="mostrarModal = true">Nuevo Mensaje</button>
    <router-link to="/principal">Volver a Principal</router-link>

    <NuevoMensajeModal v-if="mostrarModal" @close="mostrarModal = false" />
  </div>
</template>

<script>
import MensajeLista from '../components/MensajeLista.vue';
import NuevoMensajeModal from '../components/NuevoMensajeModal.vue';

export default {
  components: { MensajeLista, NuevoMensajeModal },
  data() {
    return { mostrarModal: false };
  }
};
</script>
