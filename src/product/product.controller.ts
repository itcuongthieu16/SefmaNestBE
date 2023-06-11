import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { InsertProductDTO } from './dto/insert.product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async insertProduct(
    @UploadedFile() file: Express.Multer.File,
    @Body() insertProductDTO: InsertProductDTO,
  ) {
    return this.productService.insertProduct(insertProductDTO, file);
  }
}
