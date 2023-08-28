import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoEntity } from './produto.entity';
import { v4 as uuid } from 'uuid';
import { AtualizaUsuarioDTO } from 'src/usuario/dto/AtualizaUsuario.dto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criaProduto(@Body() dadosProduto: CriaProdutoDTO) {
    const produtoEntity = new ProdutoEntity();
    produtoEntity.id = uuid();
    produtoEntity.nome = dadosProduto.nome;
    produtoEntity.valor = dadosProduto.valor;
    produtoEntity.quantidadeDisponivel = dadosProduto.quantidadeDisponivel;
    produtoEntity.descricao = dadosProduto.descricao;
    produtoEntity.caracteristicas = dadosProduto.caracteristicas;
    produtoEntity.imagens = dadosProduto.imagens;
    produtoEntity.categoria = dadosProduto.categoria;
    produtoEntity.dataCriacao = dadosProduto.dataCriacao;
    produtoEntity.dataAtualizacao = dadosProduto.dataAtualizacao;

    this.produtoRepository.salvar(produtoEntity);
    return {
      produto: produtoEntity,
      message: 'Produto criado com sucesso!',
    };
  }

  @Get()
  async listaProduto() {
    return this.produtoRepository.listar();
  }

  @Put('/:id')
  async atualizaProduto(
    @Param('id') id: string,
    @Body() dadosAtualizados: AtualizaUsuarioDTO,
  ) {
    const produtoAtualizado = await this.produtoRepository.atualizaProduto(
      id,
      dadosAtualizados,
    );
    return {
      usuario: produtoAtualizado,
      message: 'Produto atualizado com sucesso!',
    };
  }

  @Delete('/:id')
  async removeProduto(@Param('id') id: string) {
    const produto = await this.produtoRepository.remove(id);

    return {
      produto: produto.nome,
      message: 'Produto removido com sucesso!',
    };
  }
}
