import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { ProducersModule } from './modules/producers.module'; 
import { IndicatorsModule } from './modules/indicators.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ProducersModule, IndicatorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
