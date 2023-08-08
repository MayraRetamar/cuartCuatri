import { Injectable } from '@nestjs/common';
import { EscuelaDto } from './dto/escuela.dto';
import { Escuela } from './entities/escuela.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class EscuelasService {

  private escuelas: Escuela[] = [];

  constructor (@InjectRepository(Escuela) private readonly escuelaRepository: Repository<Escuela>) {};

  public async getAllRaw(): Promise<Escuela[]> { 
    let datos = await this.escuelaRepository.query("SELECT * FROM escuelas");

    datos.forEach(element => {
      let escuelas : Escuela = new Escuela(element ['id escuela'],element ['nombre escuela'], element ['domicilio']);
      this.escuelas.push(escuelas);
      
    });
    return this.escuelas;
  }
  create(EscuelaDto: EscuelaDto) {
    return 'This action adds a new escuela';
  }

  findAll() {
    return `This action returns all escuelas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} escuela`;
  }

  update(id: number, updateEscuelaDto: EscuelaDto) {
    return `This action updates a #${id} escuela`;
  }

  remove(id: number) {
    return `This action removes a #${id} escuela`;
  }
}
