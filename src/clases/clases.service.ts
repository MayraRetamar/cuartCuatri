import { Injectable } from '@nestjs/common';
import { CreateClaseDto } from './dto/create-clase.dto';
import { UpdateClaseDto } from './dto/update-clase.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Clase } from './entities/clase.entity';


@Injectable()
export class ClasesService {

  private clases : Clase[] = [];
  
    constructor(@InjectRepository(Clase) private readonly claseRepository:Repository<Clase>) {};

    public async getAllRaw(): Promise<Clase[]> {
      let datos = await this.claseRepository.query("SELECT * FROM clases");

      datos.forEach(element => { 
        let clase : Clase = new Clase(element ['id clase'], element ['Nombre']);
        this.clases.push(clase);
      });

      return this.clases;
    }
  
  create(ClaseDto: CreateClaseDto) {
    return 'This action adds a new clase';
  }

  findAll() {
    return `This action returns all clases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clase`;
  }

  update(id: number, updateClaseDto: UpdateClaseDto) {
    return `This action updates a #${id} clase`;
  }

  remove(id: number) {
    return `This action removes a #${id} clase`;
  }
}
