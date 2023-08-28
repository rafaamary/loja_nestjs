import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'Nome não pode ser vazio!' })
  nome: string;

  @EmailEhUnico({ message: 'Email já cadastrado!' })
  @IsEmail(undefined, { message: 'Email inválido!' })
  email: string;

  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres!' })
  senha: string;
}
