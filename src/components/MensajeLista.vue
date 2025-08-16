<template>
  <div>
    <h2>Mensajes enviados</h2>
    <ul>
      <li v-for="(msg, i) in mensajes" :key="i">
        <strong>{{ msg.titulo }}</strong> - para {{ msg.destinatario }}
        <br />
        {{ msg.contenido }}
        <br />
        <small>{{ msg.fecha }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from '../store';
export default {
  computed: {
    mensajes() {
      return store.mensajes;
    }
  }
};
</script>
