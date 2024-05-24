import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producer } from './producers.entity';
import { CreateProducerDto } from './create-producer-dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProducersService {
  constructor(
    @InjectRepository(Producer)
    private producerRepository: Repository<Producer>,
  ) {}

  async create(createProducerDto: CreateProducerDto): Promise<{message: string, producer?: Producer}> {
    const producer = this.producerRepository.create(createProducerDto);
    await this.producerRepository.save(producer);

    return {'message': 'Produtor adicionado com sucesso', producer: producer}
  }
}
