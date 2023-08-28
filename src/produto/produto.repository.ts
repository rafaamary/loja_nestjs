import { Injectable } from '@nestjs/common';
import { ProdutoEntity } from './produto.entity';

@Injectable()
export class ProdutoRepository {
  private produtos = [];

  async buscarPorId(id: string) {
    const produto = this.produtos.find(
      (produtoSalvo) => produtoSalvo.id === id,
    );

    if (!produto) {
      throw new Error('Produto não encontrado!');
    }
    return produto;
  }

  async salvar(produto: ProdutoEntity) {
    this.produtos.push(produto);
  }

  async listar() {
    return this.produtos;
  }

  async atualizaProduto(id: string, dadosAtualizados: Partial<ProdutoEntity>) {
    const produto = await this.buscarPorId(id);
    Object.entries(dadosAtualizados).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }
      produto[chave] = valor;
    });
    return produto;
  }

  async remove(id: string) {
    const produto = await this.buscarPorId(id);
    this.produtos = this.produtos.filter(
      (produtoSalvo) => produtoSalvo.id !== produto.id,
    );
    return produto;
  }
}
