import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducersService } from './producers.service';
import { ProducerController } from 'src/controllers/producer-controller';
import { Producer } from './producers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producer])],
  controllers: [ProducerController],
  providers: [ProducersService],
})
export class ProducersModule {}
