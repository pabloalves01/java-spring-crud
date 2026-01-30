<template>
  <div>
    <h1>Cadastrar Produto {{ productId || '' }}</h1>

    <input v-model="produto.nome" placeholder="Nome" />
    <input v-model="produto.preco" type="number" placeholder="Preço" />

    <button @click="isEditing ? atualizar() : cadastrar()">Salvar</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { criarProduto } from '../services/produtoService'
import { useRoute } from 'vue-router'
import { Produto, buscarProduto, atualizarProduto } from '../services/produtoService'
import router from '../router';

const route = useRoute();
const isEditing = ref(false);

const produto = ref<Produto>({
  nome: '',
  preco: 0,
  estoque: 0,
})

onMounted(() => {
  if (isEditing.value) {
    fetchProduct(productId.value);
  }
});

async function fetchProduct(id: number) {
  const response = await buscarProduto(id);
  produto.value = response.data;
}

async function cadastrar() {
  await criarProduto({
    nome: produto.value.nome,
    preco: Number(produto.value.preco),
    estoque: 999,
  });
  produto.value.nome = ''
  produto.value.preco = 0
  alert('Salvo!')
  router.push({ name: 'gerenciar-produtos' });
}

async function atualizar() {
  try {
    await atualizarProduto(produto.value);
    alert('Atualizado!')
    router.push({ name: 'gerenciar-produtos' });
  } catch (error) {
    console.error(error);
  }
}

const productId = computed(() => {
  isEditing.value = route.params.id !== undefined;
  return Number(route.params.id);
})

</script>
