import { IsNotEmpty, Validate } from 'class-validator';
import { IsCPFCNPJ } from 'src/decorators/cnpj.validator';
import { Cultures } from '../interfaces/cultures';
import { ApiProperty } from '@nestjs/swagger';
import { IsValidArea } from 'src/decorators/area.validator';

export class CreateProducerDto {
  @IsNotEmpty()
  @IsCPFCNPJ({message: 'CNPJ/CPF informado está inválido'})
  @ApiProperty({ description: 'CNPJ ou CPF do produtor', example: '12345678000195' })
  cnpj: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Nome do produtor', example: 'João da Silva' })
  produtor: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Nome da fazenda', example: 'Fazenda Boa Vista' })
  fazenda: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Cidade onde a fazenda está localizada', example: 'Ribeirão Preto' })
  cidade: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Estado onde a fazenda está localizada', example: 'SP' })
  estado: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Área agriculturável da fazenda em hectares', example: 800.3 })
  areaAgricultavel: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'Área de vegetação da fazenda em hectares', example: 200.2 })
  areaVegetacao: number;

  @IsNotEmpty()
  @IsValidArea({message:"A soma da área agricultável e da área de vegetação não pode ser maior que a área total da fazenda."})
  @ApiProperty({ description: 'Área total da fazenda em hectares', example: 1000.5 })
  areaFazenda: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'Cultura principal da fazenda', example: 'Soja' })
  cultura: Cultures;
}
