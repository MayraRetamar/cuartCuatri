import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('ciudades')
export class Ciudad {
    @PrimaryGeneratedColumn()
    private idCiudad: number;
    @Column()
    private nombreCiudad: string;

    constructor(idCiudad: number, nombreCiudad: string) { 
        this.idCiudad = idCiudad;
        this.nombreCiudad = nombreCiudad;
    }

    public getIdCiudad(): number {return this.idCiudad};
    public setIdCiudad(idCiudad: number): void {this.idCiudad = idCiudad};
    public getNombreCiudad(): string {return this.nombreCiudad};
    public setNombreCiudad(nombreCiudad: string): void {this.nombreCiudad = nombreCiudad};
}
