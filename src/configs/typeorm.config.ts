import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '@sH^2004_',
  database: 'teste-tecnico',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};