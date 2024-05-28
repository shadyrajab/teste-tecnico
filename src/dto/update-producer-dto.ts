import { IsOptional, IsNumber } from 'class-validator';
import { Cultures } from '../interfaces/cultures';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProducerDto {
  @IsOptional()
  @ApiProperty({ description: 'Nome do produtor', example: 'João da Silva' })
  produtor: string;

  @IsOptional()
  @ApiProperty({ description: 'Nome da fazenda', example: 'Fazenda Boa Vista' })
  fazenda: string;

  @IsOptional()
  @ApiProperty({
    description: 'Cidade onde a fazenda está localizada',
    example: 'Ribeirão Preto',
  })
  cidade: string;

  @IsOptional()
  @ApiProperty({
    description: 'Estado onde a fazenda está localizada',
    example: 'SP',
  })
  estado: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'Área total da fazenda em hectares',
    example: 1000.5,
  })
  areaFazenda: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'Área agriculturável da fazenda em hectares',
    example: 800.3,
  })
  areaAgricultavel: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'Área de vegetação da fazenda em hectares',
    example: 200.2,
  })
  areaVegetacao: number;

  @IsOptional()
  @ApiProperty({ description: 'Cultura principal da fazenda', example: 'Soja' })
  cultura: Cultures;
}
