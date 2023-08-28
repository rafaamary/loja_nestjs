import {
  IsArray,
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { CriaCaracteristicasDTO } from './CriaCaracteristicas.dto';
import { CriaImagensDTO } from './CriaImagens.dto';

export class CriaProdutoDTO {
  @IsNotEmpty({ message: 'Nome não pode ser vazio!' })
  nome: string;

  @IsPositive({ message: 'Valor deve ser positivo!' })
  valor: number;

  @IsPositive({ message: 'Quantidade disponível deve ser positivo!' })
  quantidadeDisponivel: number;

  @IsNotEmpty({ message: 'Descrição não pode ser vazio!' })
  descricao: string;

  @IsArray({ message: 'Caracteristicas inválidas!' })
  caracteristicas: CriaCaracteristicasDTO[];

  @IsArray({ message: 'Imagens inválidas!' })
  imagens: CriaImagensDTO[];

  @IsNotEmpty({ message: 'Categoria não pode ser vazio!' })
  categoria: string;

  @IsDate({ message: 'Data de criação inválida!' })
  dataCriacao: Date = new Date();

  @IsDateString()
  dataAtualizacao: Date;
}
