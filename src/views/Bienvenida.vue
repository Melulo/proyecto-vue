<template>
  <div class="bienvenida">
    <h1>¡Bienvenido a la aplicación!</h1>
    <p>Por favor, selecciona una opción para continuar:</p>

    <div class="botones">
      <router-link to="/login" class="btn">Iniciar Sesión</router-link>
      <router-link to="/registro" class="btn">Registrarse</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bienvenida'
}
</script>

<style scoped>
.bienvenida {
  text-align: center;
  margin-top: 50px;
}

.botones {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.btn:hover {
  background-color: #36986e;
}
</style>
