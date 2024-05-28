import { IsNotEmpty, Validate } from 'class-validator';
import { IsCPFCNPJ } from 'src/decorators/cnpj.validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteProducerDto {
  @IsNotEmpty()
  @Validate(IsCPFCNPJ, { message: 'CNPJ/CPF informado está inválido' })
  @ApiProperty({
    description: 'CNPJ ou CPF do produtor',
    example: '12345678000195',
  })
  cnpj: string;
}
