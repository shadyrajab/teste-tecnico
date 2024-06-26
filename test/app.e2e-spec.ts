import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';
import { ProducersModule } from '../src/modules/producers.module';
import { typeOrmConfig } from '../src/configs/typeorm.config';
import { producerData, updateData } from './commoms/producer';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(typeOrmConfig), ProducersModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/producers (POST)', () => {
    return request(app.getHttpServer())
      .post('/producers')
      .send(producerData)
      .expect(201);
  });

  it('/producers:cnpj (GET)', () => {
    return request(app.getHttpServer())
      .get('/producers/85262900100')
      .expect(200);
  });

  it('/producers:cnpj (PUT)', () => {
    return request(app.getHttpServer())
      .put('/producers/85262900100')
      .send(updateData)
      .expect(200);
  });

  it('/producers (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/producers')
      .send({ cnpj: '85262900100' })
      .expect(200);
  });
});
