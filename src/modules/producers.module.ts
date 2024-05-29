import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducersService } from '../services/producers.service';
import { ProducerController } from '../controllers/producer-controller';
import { Producer } from '../entities/producers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producer])],
  controllers: [ProducerController],
  providers: [ProducersService],
})
export class ProducersModule {}
