import api from './api';

/**
 * Interface para representar um produto
 * @property id ID do produto
 * @property nome Nome do produto
 * @property preco Preço do produto
 * @property estoque Estoque do produto
 */

export interface Produto {
    id?: number | null;
    nome: string;
    preco: number;
    estoque: number;
}

/**
 * Lista todos os produtos
 * @returns Lista de produtos
 */
export function listarProdutos() {
    return api.get<Produto[]>('/produtos');
}

/**
 * Cria um novo produto
 * @param produto Produto a ser criado
 * @returns Produto criado
 */
export function criarProduto(produto: Produto) {
    return api.post<Produto>('/produtos', produto);
}

/**
 * Atualiza um produto
 * @param produto Produto a ser atualizado
 * @returns Produto atualizado
 */
export function atualizarProduto(produto: Produto) {
    return api.put<Produto>(`/produtos/${produto.id}`, produto);
}

/**
 * Deleta um produto
 * @param id ID do produto a ser deletado
 * @returns void
 */
export function deletarProduto(id: number) {
    return api.delete<void>(`/produtos/${id}`);
}