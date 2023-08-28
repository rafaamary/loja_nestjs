import { CriaCaracteristicasDTO } from './dto/CriaCaracteristicas.dto';
import { CriaImagensDTO } from './dto/CriaImagens.dto';

export class ProdutoEntity {
  id: string;
  nome: string;
  valor: number;
  quantidadeDisponivel: number;
  descricao: string;
  caracteristicas: CriaCaracteristicasDTO[];
  imagens: CriaImagensDTO[];
  categoria: string;
  dataCriacao: Date = new Date();
  dataAtualizacao: Date;
}
