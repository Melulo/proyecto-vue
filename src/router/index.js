import { createRouter, createWebHistory } from 'vue-router';

import Bienvenida from '../views/Bienvenida.vue';
import Login from '../views/Login.vue';
import Principal from '../views/Principal.vue';
import Usuario from '../views/Usuario.vue';
import UsuarioMensajes from '../views/UsuarioMensajes.vue';
import Registro from '../views/Registro.vue';

const routes = [
  { path: '/', component: Bienvenida },
  { path: '/login', component: Login },
  { path: '/principal', component: Principal },
  { path: '/usuario', component: Usuario },
  { path: '/usuario/mensajes', component: UsuarioMensajes },
  { path: '/registro', component: Registro }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
