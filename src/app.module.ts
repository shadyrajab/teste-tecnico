import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { ProducersModule } from './producers/producers.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ProducersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
