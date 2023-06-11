import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginAuthDTO {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
