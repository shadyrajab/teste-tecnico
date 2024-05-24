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

  async create(createProducerDto: CreateProducerDto): Promise<Producer> {
    const producer = this.producerRepository.create(createProducerDto);
    return this.producerRepository.save(producer);
  }
}
