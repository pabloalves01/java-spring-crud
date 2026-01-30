import { createRouter, createWebHistory } from 'vue-router'
import NovoProduto from '../views/NovoProduto.vue'
import GerenciarProdutos from '../views/GerenciarProdutos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'gerenciar-produtos',
      component: GerenciarProdutos,
    },
    {
      path: '/produtos/cadastrar',
      name: 'novo-produto',
      component: NovoProduto,
    },
    {
      path: '/produtos/editar/:id',
      name: 'editar-produto',
      component: NovoProduto,
    }
  ],
})

export default router
