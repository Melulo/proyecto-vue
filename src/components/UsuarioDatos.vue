<template>
  <div class="usuario-datos">
    <h2>Datos del Usuario</h2>
    <ul>
      <li><strong>Nombre:</strong> Juan Pérez</li>
      <li><strong>Email:</strong> juan@example.com</li>
      <li><strong>Rol:</strong> Usuario</li>
    </ul>

    <div class="botones">
      <router-link to="/principal">
        <button>Ir a Principal</button>
      </router-link>

      <button @click="$emit('editar')">Editar Usuario</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsuarioDatos"
};
</script>

<style scoped>
.usuario-datos {
  padding: 1rem;
  border: 1px solid #ccc;
  width: 300px;
  margin: 1rem auto;
  border-radius: 6px;
}
.usuario-datos ul {
  list-style: none;
  padding: 0;
}
.usuario-datos li {
  margin-bottom: 0.5rem;
}
.botones {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
}
</style>
