import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

//Define a "type" of "authentication request"
export class AuthDTO {
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
