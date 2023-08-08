import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EscuelasService } from './escuelas.service';
import { EscuelaDto } from './dto/escuela.dto';


@Controller('escuelas')
export class EscuelasController {
  constructor(private readonly escuelasService: EscuelasService) {}

  @Post()
  create(@Body() createEscuelaDto: EscuelaDto) {
    return this.escuelasService.create(createEscuelaDto);
  }

  @Get()
  findAll() {
    return this.escuelasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escuelasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEscuelaDto: EscuelaDto) {
    return this.escuelasService.update(+id, updateEscuelaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escuelasService.remove(+id);
  }
}
