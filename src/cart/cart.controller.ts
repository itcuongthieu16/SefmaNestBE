import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { GetUser } from 'src/auth/decorator';
import { InsertCartDTO } from './dto/insert.cart.dto';
import { MyJwtGuard } from 'src/auth/guard';
import { UpdateCartDTO } from './dto/update.cart.dto';

@UseGuards(MyJwtGuard)
@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Get()
  getNotes(@GetUser('id') userId: number) {
    return this.cartService.getAllCarts(userId);
  }

  @Post()
  insertCart(
    @GetUser('id') userId: number,
    @Body() insertCartDTO: InsertCartDTO,
  ) {
    return this.cartService.insertCart(userId, insertCartDTO);
  }

  @Get(':id')
  getNoteById(@Param('id') cartId: number) {
    return this.cartService.getCartById(cartId);
  }

  @Patch(':id')
  updateNoteById(
    @Param('id', ParseIntPipe) cartId: number,
    @Body() updateCartDTO: UpdateCartDTO,
  ) {
    return this.cartService.updateCartById(cartId, updateCartDTO);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  deleteNoteById(@Query('id', ParseIntPipe) cartId: number) {
    return this.cartService.deleteCartById(cartId);
  }
}
