import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/producers (POST)', () => {
    const producerData = {
      "cnpj": "85262900100",
      "produtor": "Shady Rajab",
      "fazenda": "Fazenda Boa Vista",
      "cidade": "Ribeirão Preto",
      "estado": "SP",
      "areaAgricultavel": 800.3,
      "areaVegetacao": 200.2,
      "areaFazenda": 1000.5,
      "cultura": ["Soja", "Milho"]
    }
    return request(app.getHttpServer())
      .post('/producers')
      .send(producerData)
      .expect(200)
      .expect({'message': "O CNPJ informado já existe na base de dados"});
  });
});
