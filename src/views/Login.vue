// Sebastián Faliu

<template>
  <div class="login">
    <h2>Iniciar Sesión</h2>

    <div class="form-group">
      <label>Usuario:</label>
      <input 
        type="text" 
        v-model="usuario" 
        :class="{ 'campo-vacio': mostrarError && !usuario }"
      />
    </div>

    <div class="form-group">
      <label>Contraseña:</label>
      <input 
        type="password" 
        v-model="password" 
        :class="{ 'campo-vacio': mostrarError && !password }"
      />
    </div>

    <div class="botones">
      <router-link to="/" class="link">
        <button>Volver a Bienvenida</button>
      </router-link>
      <router-link to="/registro" class="link">
        <button>Ir a Registro</button>
      </router-link>
      <button @click="irPrincipal">Ir a Principal</button>
    </div>

    <ModalAdvertencia 
      :mostrar="mostrarError" 
      @cerrar="mostrarError = false" 
    />
  </div>
</template>

<script>
import ModalAdvertencia from "../components/ModalAdvertencia.vue";

export default {
  name: "Login",
  components: { ModalAdvertencia },
  data() {
    return {
      usuario: "",
      password: "",
      mostrarError: false
    };
  },
  methods: {
    irPrincipal() {
      if (!this.usuario || !this.password) {
        this.mostrarError = true;
      } else {
        this.$router.push("/principal");
      }
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
}
.form-group {
  margin-bottom: 1rem;
}
.campo-vacio {
  border: 2px solid red;
}
.botones {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}
</style>
