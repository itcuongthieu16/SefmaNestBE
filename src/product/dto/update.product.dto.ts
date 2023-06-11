import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

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
