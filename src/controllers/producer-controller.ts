import { Controller, Post, Body } from '@nestjs/common';
import { Producer } from 'src/producers/producers.entity';
import { ProducersService } from 'src/producers/producers.service';
import { CreateProducerDto } from 'src/producers/create-producer-dto';

@Controller('producers')
export class ProducerController {
  constructor(private readonly producerService: ProducersService) {}

  @Post()
  async create(@Body() createProducerDto: CreateProducerDto): Promise<{message: string, producer?: Producer}> {
    try{
        return await this.producerService.create(createProducerDto);
    } catch(err) {
        return {'message': "O CNPJ informado já existe na base de dados"}
    }
  }
}
