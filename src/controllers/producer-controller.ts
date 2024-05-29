import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Producer } from '../entities/producers.entity';
import { ProducersService } from '../services/producers.service';
import { CreateProducerDto } from '../dto/create-producer-dto';
import { DeleteProducerDto } from '../dto/delete-producer-dto';
import { UpdateProducerDto } from '../dto/update-producer-dto';

@Controller('producers')
export class ProducerController {
  constructor(private readonly producerService: ProducersService) {}

  @Post()
  async create(
    @Body() createProducerDto: CreateProducerDto,
  ): Promise<{ message: string; producer?: Producer }> {
    return await this.producerService.create(createProducerDto);
  }
  @Get(':cnpj')
  async getByCNPJ(
    @Param('cnpj') cnpj: string,
  ): Promise<Producer | { message: string }> {
    return await this.producerService.findByCNPJ(cnpj);
  }
  @Get('')
  async getAllCNPJ(): Promise<Producer[]> {
    return await this.producerService.getAll();
  }
  @Delete()
  async deleteByCNPJ(
    @Body() deleteProducerDto: DeleteProducerDto,
  ): Promise<{ message: string }> {
    return await this.producerService.deleteByCNPJ(deleteProducerDto);
  }
  @Put(':cnpj')
  async updateByCNPJ(
    @Param('cnpj') cnpj: string,
    @Body() updateProducerDto: UpdateProducerDto,
  ): Promise<{ message: string }> {
    return await this.producerService.updateByCNPJ(cnpj, updateProducerDto);
  }
}
