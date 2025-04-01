import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductoDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    @IsNotEmpty()
    precioCompra: number;

    @IsNumber()
    @IsNotEmpty()
    precioVenta: number;

    @IsNumber()
    @IsNotEmpty()
    stock: number;
}