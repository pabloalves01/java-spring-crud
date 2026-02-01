import api from './api';

export interface Cliente {
    id?: string;
    nome: string;
    email: string;
    telefone: string;
    taxId: string;
}

/** Resposta da API de listagem (cada item tem id + metadata) */
export interface ClienteListItem {
    id: string;
    metadata?: {
        name?: string;
        cellphone?: string;
        email?: string;
        taxId?: string;
    };
}

export function criarCliente(cliente: Cliente) {
    return api.post<string>('/api/customer/create', {
        name: cliente.nome,
        email: cliente.email,
        cellphone: cliente.telefone,
        taxId: cliente.taxId,
    });
}

export function listarClientes() {
    return api.get<ClienteListItem[]>('/api/customer/list');
}

/** Converte item da API (id + metadata) para o formato usado na tela (flat) */
export function mapClienteListItem(item: ClienteListItem): Cliente {
    const m = item.metadata ?? {};
    return {
        id: item.id,
        nome: m.name ?? '',
        email: m.email ?? '',
        telefone: m.cellphone ?? '',
        taxId: m.taxId ?? '',
    };
}