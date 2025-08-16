import { createRouter, createWebHistory } from 'vue-router'
import Bienvenida from '../views/Bienvenida.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import Principal from '../views/Principal.vue'
import Usuario from '../views/Usuario.vue'
import Mensajes from '../views/UsuarioMensajes.vue'

const routes = [
  { path: '/', component: Bienvenida },
  { path: '/login', component: Login },
  { path: '/registro', component: Registro },
  { path: '/principal', component: Principal },
  { path: '/usuario', component: Usuario },
  { path: '/mensajes', component: Mensajes }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
