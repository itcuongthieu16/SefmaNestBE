import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertCartDTO } from './dto/insert.cart.dto';
import { UpdateCartDTO } from './dto/update.cart.dto';

@Injectable()
export class CartService {
  constructor(private prismaService: PrismaService) {}

  getAllCarts(userId: number) {
    const carts = this.prismaService.cart.findMany({
      where: {
        userId,
      },
    });
    return carts;
  }

  async insertCart(userId: number, insertCartDTO: InsertCartDTO) {
    const cart = await this.prismaService.cart.create({
      data: {
        ...insertCartDTO,
        userId,
      },
    });
    return cart;
  }

  getCartById(cartId: number) {
    return this.prismaService.cart.findFirst({
      where: {
        id: cartId,
      },
    });
  }

  async updateCartById(cartId: number, updateCartDTO: UpdateCartDTO) {
    const cart = this.prismaService.cart.findUnique({
      where: {
        id: cartId,
      },
    });
    if (!cart) {
      throw new ForbiddenException('Cannot find Cart to update');
    }
    return this.prismaService.cart.update({
      where: {
        id: cartId,
      },
      data: { ...updateCartDTO },
    });
  }

  async deleteCartById(cartId: number) {
    const cart = this.prismaService.cart.findUnique({
      where: {
        id: cartId,
      },
    });
    if (!cart) {
      throw new ForbiddenException('Cannot find Cart to delete');
    }
    return this.prismaService.cart.delete({
      where: {
        id: cartId,
      },
    });
  }
}
