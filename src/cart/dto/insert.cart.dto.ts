import { IsNotEmpty, IsNumber } from 'class-validator';

export class InsertCartDTO {
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  total: number;
}
