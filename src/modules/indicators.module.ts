import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producer } from '../entities/producers.entity';
import { IndicatorController } from 'src/controllers/indicator-controller';
import { IndicatorsService } from 'src/services/indicators.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producer])],
  controllers: [IndicatorController],
  providers: [IndicatorsService],
})
export class IndicatorsModule {}
