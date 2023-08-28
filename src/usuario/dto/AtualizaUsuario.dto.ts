import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class AtualizaUsuarioDTO {
  @IsString()
  @IsOptional()
  nome: string;

  @EmailEhUnico({ message: 'Email já cadastrado!' })
  @IsEmail(undefined, { message: 'Email inválido!' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres!' })
  @IsOptional()
  senha: string;
}
