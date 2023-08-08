import { Entity, PrimaryGeneratedColumn, Column, } from "typeorm";

@Entity('clases')
export class Clase {
    @PrimaryGeneratedColumn()
    private idClase: number;

    @Column()
    private nombreClase: string;

   //idEscuela

   //idProfesor

   constructor(idClase: number, nombreClase: string){ 
    this.idClase = idClase;
    this.nombreClase = nombreClase;
   }

   public getIdClase(): number {return this.idClase};
   public setIdClase(idClase: number): void {this.idClase = idClase};
   
}
