import api from './api';

interface Cliente {
    nome: string;
    email: string;
    telefone: string;
    taxId: string;
}

export function criarCliente(cliente: Cliente) {
    return api.post<string>('/api/customer/create', {
        name: cliente.nome,
        email: cliente.email,
        cellphone: cliente.telefone,
        taxId: cliente.taxId,
    });
}