import {
  IsArray,
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { CriaCaracteristicasDTO } from './CriaCaracteristicas.dto';
import { CriaImagensDTO } from './CriaImagens.dto';

export class CriaProdutoDTO {
  @IsNotEmpty({ message: 'Nome não pode ser vazio!' })
  @IsOptional()
  nome: string;

  @IsPositive({ message: 'Valor deve ser positivo!' })
  @IsOptional()
  valor: number;

  @IsPositive({ message: 'Quantidade disponível deve ser positivo!' })
  @IsOptional()
  quantidadeDisponivel: number;

  @IsOptional()
  @IsNotEmpty({ message: 'Descrição não pode ser vazio!' })
  descricao: string;

  @IsOptional()
  @IsArray({ message: 'Caracteristicas inválidas!' })
  caracteristicas: CriaCaracteristicasDTO[];

  @IsOptional()
  @IsArray({ message: 'Imagens inválidas!' })
  imagens: CriaImagensDTO[];

  @IsOptional()
  @IsNotEmpty({ message: 'Categoria não pode ser vazio!' })
  categoria: string;

  @IsOptional()
  @IsDate({ message: 'Data de criação inválida!' })
  dataCriacao: Date = new Date();

  @IsOptional()
  @IsDateString()
  dataAtualizacao: Date;
}
