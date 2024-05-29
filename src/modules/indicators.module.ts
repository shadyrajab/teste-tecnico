import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producer } from '../entities/producers.entity';
import { IndicatorController } from '../controllers/indicator-controller';
import { IndicatorsService } from '../services/indicators.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producer])],
  controllers: [IndicatorController],
  providers: [IndicatorsService],
})
export class IndicatorsModule {}
