<template>
    <div>
        <input type="text" v-model="cliente.nome" placeholder="Nome" />
        <input type="text" v-model="cliente.email" placeholder="Email" />
        <input type="text" v-model="cliente.telefone" placeholder="Telefone" />
        <input type="text" v-model="cliente.taxId" placeholder="CPF" />
        <button @click="cadastrar">Cadastrar</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { criarCliente } from '../services/clienteService';

const cliente = ref({
    nome: '',
    email: '',
    telefone: '',
    taxId: '',
});

async function cadastrar() {
    await criarCliente(cliente.value);
}
</script>