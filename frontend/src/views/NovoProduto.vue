<template>
  <div>
    <h1>Cadastrar Produto</h1>

    <input v-model="nome" placeholder="Nome" />
    <input v-model="preco" type="number" placeholder="Preço" />

    <button @click="salvar">Salvar</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { criarProduto } from '../services/produtoService'

const nome = ref('')
const preco = ref<number | null>(null)

async function salvar() {
  await criarProduto({
    nome: nome.value,
    preco: Number(preco.value),
    estoque: 999,
  });
  nome.value = ''
  preco.value = null
  alert('Salvo!')
}
</script>
