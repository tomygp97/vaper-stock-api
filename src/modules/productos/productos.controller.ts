import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from 'src/entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

    @Get()
    findAll(): Promise<Producto[]> {
        return this.productosService.findAll();
    }

    @Post()
    create(@Body() createProductoDto: CreateProductoDto): Promise<Producto> {
        return this.productosService.create(createProductoDto);
    }
}
