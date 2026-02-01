<template>
    <table border="1" cellpadding="20" cellspacing="0" style="width: 100%;">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>CPF</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cliente, index) in clientes" :key="cliente.id ?? index">
                <td>{{ cliente.id }}</td>
                <td>{{ cliente.nome }}</td>
                <td>{{ cliente.email }}</td>
                <td>{{ cliente.telefone }}</td>
                <td>{{ cliente.taxId }}</td>
                <td>
                    <!-- <button @click="handleEditProduct(cliente.id)">Editar</button>
                    <button @click="handleDeleteProduct(cliente.id)">Excluir</button> -->
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Cliente, listarClientes, mapClienteListItem } from '../services/clienteService';

const clientes = ref<Cliente[]>([]);

onMounted(async () => {
    const response = await listarClientes();
    const lista = response.data ?? [];
    clientes.value = lista.map(mapClienteListItem);
});

</script>