import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto.entity";
import { Cliente } from "./cliente.entity";


@Entity()
export class Venta {
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

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    ingresoTotal: number;

    @ManyToOne(() => Cliente, { nullable: true, eager: true })
    cliente: Cliente;

    @Column({ nullable: true })
    numeroOrden: string;

    @Column({ default: "Efectivo" })
    metodoPago: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    impuestos: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    descuentos: number;
}