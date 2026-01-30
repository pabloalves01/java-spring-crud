import api from './api';

export interface Produto {
    id?: number;
    nome: string;
    preco: number;
    estoque: number;
}

// export function listarProdutos() {
//     return api.get<Produto[]>('/produtos');
// }

export function criarProduto(produto: Produto) {
    return api.post<Produto>('/produtos', produto);
}

// export function atualizarProduto(produto: Produto) {
//     return api.put<Produto>(`/produtos/${produto.id}`, produto);
// }

// export function deletarProduto(id: number) {
//     return api.delete<void>(`/produtos/${id}`);
// }