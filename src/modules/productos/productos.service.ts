import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/entities/producto.entity';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';

@Injectable()
export class ProductosService {
    constructor(
        @InjectRepository(Producto)
        private productosRepository: Repository<Producto>
    ) {}

    async findAll(): Promise<Producto[]> {
        return this.productosRepository.find();
    }

    async create(createProductoDto: CreateProductoDto): Promise<Producto> {
        const producto = this.productosRepository.create(createProductoDto);
        return this.productosRepository.save(producto);
    }
}
