// Melani López

<template>
  <div>
    <UsuarioDatos @editar="mostrarModal = true" />
    <ModalAdvertencia :mostrar="mostrarModal" @cerrar="mostrarModal = false" />
  </div>
</template>

<script>
import UsuarioDatos from '../components/UsuarioDatos.vue';
import ModalAdvertencia from '../components/ModalAdvertencia.vue';

export default {
  name: "Usuario",
  components: { UsuarioDatos, ModalAdvertencia },
  data() {
    return {
      mostrarModal: false
    };
  }
};
</script>