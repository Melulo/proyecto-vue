<template>
  <div class="login">
    <h1>Iniciar Sesión</h1>

    <div class="form">
      <input
        type="text"
        placeholder="Usuario"
        v-model="usuario"
        :class="{ error: mostrarError && !usuario }"
      />
      <input
        type="password"
        placeholder="Contraseña"
        v-model="contrasena"
        :class="{ error: mostrarError && !contrasena }"
      />

      <button @click="irPrincipal">Ingresar</button>
    </div>

    <div class="links">
      <router-link to="/">Volver a Bienvenida</router-link>
      <router-link to="/registro">Registrarse</router-link>
      <router-link to="/principal">Volver</router-link>
    </div>

    <!-- Modal de error -->
    <div v-if="mostrarError" class="modal">
      <div class="modal-content">
        <p>Por favor, complete ambos campos antes de continuar.</p>
        <button @click="cerrarModal">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      usuario: '',
      contrasena: '',
      mostrarError: false
    }
  },
  methods: {
    irPrincipal() {
      if (!this.usuario || !this.contrasena) {
        this.mostrarError = true
      } else {
        this.$router.push('/principal')
      }
    },
    cerrarModal() {
      this.mostrarError = false
    }
  }
}
</script>

<style scoped>
.login {
  text-align: center;
  margin-top: 50px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  margin: 0 auto;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input.error {
  border: 2px solid red;
}

button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #36986e;
}

.links {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.modal-content button {
  margin-top: 10px;
}
</style>
