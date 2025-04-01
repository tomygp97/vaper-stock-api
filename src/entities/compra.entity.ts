import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto.entity";


@Entity()
export class Compra {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Producto, { eager: true})
    producto: Producto;

    @Column()
    cantidad: number;

    @Column()
    fecha: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precioUnitario: number;

    @Column({ nullable: true })
    numeroFactura: string;

    @Column({ default: "Completada" })
    estado: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    impuestos: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    descuentos: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    costoTotal: number;
}