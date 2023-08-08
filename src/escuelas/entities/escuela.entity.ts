import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity('escuelas')
export class Escuela {
    @PrimaryGeneratedColumn()
    private idEscuela: number;
    @Column()
    private nombreEscuela: string;
    @Column()
    private domicilio: string;

    //idCiudad

    constructor(idEscuela: number, nombreEscuela: string, domicilio: string){ 
        this.idEscuela = idEscuela;
        this.nombreEscuela = nombreEscuela;
        this.domicilio = domicilio;
    }

    public getIdEscuela(): number {return this.idEscuela};
    public setIdEscuela(idEscuela: number): void {this.idEscuela = idEscuela };
    public getNombreEscuela():string {return this.nombreEscuela};
    public setNombreEscuela(nombreEscuela: string): void {this.nombreEscuela = nombreEscuela};
    public getDomicilio(): string {return this.domicilio};
    public setDomicilio(domicilio: string) : void {this.domicilio = domicilio};

    

   

}
