import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class InsertProductDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  gia: number;

  @IsString()
  @IsNotEmpty()
  image: string[];

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  size: string[];

  @IsString()
  @IsNotEmpty()
  color: string[];
}
