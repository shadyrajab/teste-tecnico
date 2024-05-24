import { IsNotEmpty, Length, IsNumber } from 'class-validator';
import { IsCPFCNPJ } from 'src/decorators/cnpj.validator';
import { Cultures } from '../interfaces/cultures';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProducerDto {
  @IsNotEmpty()
  @Length(11, 18, { message: 'O campo cnpj deve ter entre 11 e 18 caracteres' })
  @IsCPFCNPJ({ message: 'CNPJ/CPF informado está inválido' })
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
  @IsNumber()
  @ApiProperty({ description: 'Área total da fazenda em hectares', example: 1000.5 })
  areaFazenda: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'Área agriculturável da fazenda em hectares', example: 800.3 })
  areaAgricultavel: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'Área de vegetação da fazenda em hectares', example: 200.2 })
  areaVegetacao: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'Cultura principal da fazenda', example: 'Soja' })
  cultura: Cultures;
}
