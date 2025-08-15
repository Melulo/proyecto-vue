// Sebastián Faliu

<template>
  <div class="bienvenida">
    <h1>¡Bienvenido a la aplicación!</h1>
    <p>Selecciona una opción para continuar:</p>
    
    <div class="botones">
      <router-link to="/login">
        <button>Iniciar Sesión</button>
      </router-link>
      <router-link to="/registro">
        <button>Registrarse</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bienvenida"
};
</script>

<style scoped>
.bienvenida {
  text-align: center;
  margin-top: 2rem;
}
.botones {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
