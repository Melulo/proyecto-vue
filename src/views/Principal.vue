<template>
  <div class="container">
    <h1>Bienvenido, {{ usuario.nombre }}</h1>

    <nav class="menu">
      <router-link to="/usuario">Usuario</router-link>
      <router-link to="/mensajes">Mensajes</router-link>
    </nav>

    <div class="info">
      <p><strong>Usuario:</strong> {{ usuario.nombre }}</p>
      <button @click="confirmarIrLogin">Ir a Login</button>
    </div>

    <div v-if="mostrarModal" class="modal">
      <div class="modal-body">
        <p>¿Estás seguro que querés ir a la pantalla de Login?</p>
        <div class="modal-actions">
          <button @click="irLogin">Sí, ir a Login</button>
          <button @click="mostrarModal = false">No, volver</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Principal',
  data() {
    return {
      usuario: { nombre: 'Juan Pérez' },
      mostrarModal: false
    }
  },
  methods: {
    confirmarIrLogin() {
      this.mostrarModal = true
    },
    irLogin() {
      this.mostrarModal = false
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.container { max-width: 700px; margin: 20px auto; }
.menu { margin: 12px 0; gap: 12px; display:flex; }
.menu a { text-decoration: none; padding: 6px 10px; border-radius: 6px; border: 1px solid #ccc; }
.info { margin-top: 18px; }
button { padding: 6px 10px; cursor: pointer; border-radius: 6px; }

.modal {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.45);
  display:flex; align-items:center; justify-content:center;
}
.modal-body {
  background: #fff; padding: 18px; border-radius: 8px; width: 90%; max-width: 380px;
}
.modal-actions { display:flex; gap: 8px; justify-content:flex-end; margin-top: 12px; }
</style>
