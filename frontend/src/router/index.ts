import { createRouter, createWebHistory } from 'vue-router'
import NovoProduto from '../views/NovoProduto.vue'
import GerenciarProdutos from '../views/GerenciarProdutos.vue'
import NovoCliente from '../views/NovoCliente.vue'
import GerenciarClientes from '../views/GerenciarClientes.vue'

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
    },
    {
      path: '/clientes',
      name: 'gerenciar-clientes',
      component: GerenciarClientes,
    },
    {
      path: '/clientes/cadastrar',
      name: 'novo-cliente',
      component: NovoCliente,
    }
  ],
})

export default router
