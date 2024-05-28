import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producer } from 'src/entities/producers.entity';
import { camelCase } from 'typeorm/util/StringUtils';

@Injectable()
export class IndicatorsService {
  constructor(
    @InjectRepository(Producer)
    private producerRepository: Repository<Producer>,
  ) {}

  async getAreaTotalFazenda(): Promise<number> {
    const result = await this.producerRepository
      .createQueryBuilder()
      .select(`SUM("${camelCase('areaFazenda')}")`, 'totalAreaFazenda')
      .getRawOne();

    return result.totalAreaFazenda || 0;
  }

  async getQtdFazendas(): Promise<number> {
    const result = await this.producerRepository
      .createQueryBuilder()
      .select('COUNT(*)', 'qtdFazendas')
      .getRawOne();

    return parseInt(result.qtdFazendas) || 0;
  }

  async getCulturasPorEstado(): Promise<
    { estado: string; culturas: string[] }[]
  > {
    const result = this.producerRepository
      .createQueryBuilder()
      .select('culturas_por_estado.estado', 'estado')
      .addSelect(
        'jsonb_object_agg(culturas_por_estado.cultura, culturas_por_estado.quantidade)',
        'culturas',
      )
      .from((subQuery) => {
        return subQuery
          .select('producer.estado', 'estado')
          .addSelect('jsonb_array_elements_text(producer.cultura)', 'cultura')
          .addSelect('COUNT(*)', 'quantidade')
          .from(Producer, 'producer')
          .groupBy('producer.estado, cultura');
      }, 'culturas_por_estado')
      .groupBy('culturas_por_estado.estado')
      .getRawMany();

    return await result;
  }
}
