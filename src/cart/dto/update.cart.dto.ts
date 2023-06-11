import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateCartDTO {
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  total: number;
}
