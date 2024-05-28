import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';
import { IsCPFCNPJ } from 'src/decorators/cnpj.validator';
import { Length } from 'class-validator';
import { Cultures } from '../interfaces/cultures'

@Entity()
@Unique(["cnpj"])
export class Producer extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false, type: 'varchar' })
    @Length(11, 18, { message: "O campo cnpj deve ter entre 11 e 18 caracteres"})
    @IsCPFCNPJ({ message: "CNPJ/CPF informado está inválido" })
    cnpj: string

    @Column({ nullable: false, type: 'varchar' })
    produtor: string

    @Column({ nullable: false, type: 'varchar' })
    fazenda: string

    @Column({ nullable: false, type: 'varchar' })
    cidade: string

    @Column({ nullable: false, type: 'varchar' })
    estado: string

    @Column({ nullable: false, type: 'float' })
    areaFazenda: number

    @Column({ nullable: false, type: 'float' })
    areaAgricultavel: number

    @Column({ nullable: false, type: 'float' })
    areaVegetacao: number

    @Column({ nullable: false, type: 'varchar' })
    cultura: Cultures
}