<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
 <div>
  <nav>
     <router-link to="/">Inicio</router-link>

     <router-link to="/about">Acerca de</router-link>
  </nav>
  <router-view></router-view>
 </div>
</template>

<script>
export default {
  name: 'App'
}
</script>