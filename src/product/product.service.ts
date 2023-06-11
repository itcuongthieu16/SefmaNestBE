import {
  Injectable,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertProductDTO } from './dto/insert.product.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class ProductService {
  constructor(
    private prismaService: PrismaService,
    private cloudinary: CloudinaryService,
  ) {}

  async uploadImageToCloudinary(file: Express.Multer.File) {
    return await this.cloudinary.uploadImage(file).catch(() => {
      throw new BadRequestException('Invalid file type.');
    });
  }

  getAllProducts() {
    const product = this.prismaService.product.findMany();
    return product;
  }

  async insertProduct(
    insertProductDTO: InsertProductDTO,
    file: Express.Multer.File,
  ) {
    const uploadedImage = await this.uploadImageToCloudinary(file);

    if (!uploadedImage) {
      throw new HttpException(
        'Failed to upload image',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const newProduct = await this.prismaService.product.create({
      data: {
        ...insertProductDTO,
        image: [uploadedImage.secure_url],
      },
    });

    return newProduct;
  }
}
