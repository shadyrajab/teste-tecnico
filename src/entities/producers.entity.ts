import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
import { Cultures } from '../interfaces/cultures';

@Entity()
@Unique(['cnpj'])
export class Producer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  cnpj: string;

  @Column({ nullable: false, type: 'varchar' })
  produtor: string;

  @Column({ nullable: false, type: 'varchar' })
  fazenda: string;

  @Column({ nullable: false, type: 'varchar' })
  cidade: string;

  @Column({ nullable: false, type: 'varchar' })
  estado: string;

  @Column({ nullable: false, type: 'float' })
  areaAgricultavel: number;

  @Column({ nullable: false, type: 'float' })
  areaVegetacao: number;

  @Column({ nullable: false, type: 'float' })
  areaFazenda: number;

  @Column({ nullable: true, type: 'jsonb' })
  cultura: Cultures[];
}
