import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producer } from './producers.entity';
import { CreateProducerDto } from './create-producer-dto';
import { Repository } from 'typeorm';
import { DeleteProducerDto } from './delete-producer-dto';

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

  async findByCNPJ(cnpj: string): Promise<Producer> {
    return await this.producerRepository.findOne({ where: { cnpj } })
  }

  async deleteByCNPJ(deleteProducerDto: DeleteProducerDto): Promise<{message: string}> {
    const cnpj = deleteProducerDto.cnpj
    const producer = await this.findByCNPJ(cnpj);
    if (!producer) return {"message": `Não existe nenhum produtor de cnpj ${cnpj}`}
    await this.producerRepository.remove(producer)

    return { "message": `Produtor de cnpj ${cnpj} deletado com sucesso`}
  }
}
