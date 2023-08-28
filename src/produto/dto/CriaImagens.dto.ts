import { IsNotEmpty } from 'class-validator';

export class CriaImagensDTO {
  @IsNotEmpty({ message: 'Url não pode ser vazio!' })
  url: string;
  @IsNotEmpty({ message: 'Descrição não pode ser vazio!' })
  descricao: string;
}
