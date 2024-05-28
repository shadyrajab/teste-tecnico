import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { Producer } from 'src/entities/producers.entity';
import { ProducersService } from 'src/services/producers.service';
import { CreateProducerDto } from 'src/dto/create-producer-dto';
import { DeleteProducerDto } from 'src/dto/delete-producer-dto';
import { UpdateProducerDto } from 'src/dto/update-producer-dto';


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
  @Get(':cnpj')
  async getByCNPJ(@Param('cnpj') cnpj: string) : Promise<Producer | {message: string}> {
    return await this.producerService.findByCNPJ(cnpj)
  }
  @Delete()
  async deleteByCNPJ(@Body() deleteProducerDto: DeleteProducerDto): Promise<{ message: string }> {
    return await this.producerService.deleteByCNPJ(deleteProducerDto)
  }
  @Put(':cnpj')
  async updateByCNPJ(@Param("cnpj") cnpj: string, @Body() updateProducerDto: UpdateProducerDto): Promise<{message: string}> {
    return await this.producerService.updateByCNPJ(cnpj, updateProducerDto)
  }
}
