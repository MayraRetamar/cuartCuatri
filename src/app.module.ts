import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { EscuelasModule } from './escuelas/escuelas.module';
import { ClasesModule } from './clases/clases.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'miperrita',
      database: 'escolar',
      entities: [__dirname+ '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    CiudadModule,
    EscuelasModule,
    ClasesModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
