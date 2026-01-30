<template>
    <table border="1" cellpadding="20" cellspacing="0" style="width: 100%;">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Estoque</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="produto in produtos" :key="produto.id!">
                <td>{{ produto.id }}</td>
                <td>{{ produto.nome }}</td>
                <td>{{ produto.preco }}</td>
                <td>{{ produto.estoque }}</td>
                <td>
                    <button>Editar</button>
                    <button @click="handleDeleteProduct(produto.id!)">Excluir</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Produto, listarProdutos, deletarProduto } from '../services/produtoService';

const produtos = ref<Produto[]>([]);

onMounted(async () => {
    const response = await listarProdutos();
    produtos.value = response.data;
});

async function handleDeleteProduct(id: number) {
    await deletarProduto(id);
    produtos.value.filter(p => p.id != id);
}
</script>