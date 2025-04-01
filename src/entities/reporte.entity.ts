import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Reporte {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipo: string; // Ej: "ganancias", "inventario"

    @Column({ type: 'json', nullable: true })
    parametros: any;

    @Column({ type: 'json', nullable: true })
    resultado: any; // Ej: { totalGanancias: 5000 }

    @Column()
    fechaGeneracion: Date;
}