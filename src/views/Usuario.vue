<template>
  <div class="usuario">
    <h1>Datos del Usuario</h1>
    <p><strong>Nombre:</strong> Lucas Agustin</p>
    <p><strong>correo:</strong> lucas.agustin@example.com</p>
    <p><strong>Rol:</strong> Administrador</p>

     <button
         @click="$router.push('/principal')">Ir a Principal</button>
          <button @click="mostrarModal = true">Editar Datos</button>
          <div v-if="mostrarModal" class="modal">
              <div class="modal-content">
                <p>Esta funcionalidad aún no está disponible.</p>
                <button @click="mostrarModal = false">Cerrar</button>
             </div>
          </div>
         <div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Usuario',
   data() {
       return {
           mostrarModal: false,
       };
   },
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: rgb(15, 15, 15);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

</style>
