import { Length, IsNotEmpty } from 'class-validator';
import { IsCPFCNPJ } from 'src/decorators/cnpj.validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteProducerDto {
    @IsNotEmpty()
    @Length(11, 18, { message: "O campo cnpj deve ter entre 11 e 18 caracteres"})
    @IsCPFCNPJ({ message: "CNPJ/CPF informado está inválido" })
    @ApiProperty({ description: 'CNPJ ou CPF do produtor', example: '12345678000195' })
    cnpj: string
}