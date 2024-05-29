import { Test, TestingModule } from '@nestjs/testing';
import { ProducersService } from '../src/services/producers.service';
import { producerData, updateData } from './commoms/producer';
import { CreateProducerDto } from '../src/dto/create-producer-dto';
import { DeleteProducerDto } from '../src/dto/delete-producer-dto';
import { Repository } from 'typeorm';
import { Producer } from '../src/entities/producers.entity';

describe('ProducersService', () => {
  let service: ProducersService;
  let repository: Repository<Producer>;

  const cnpj = '85262900100';

  const mockProducerRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest.fn().mockResolvedValue(producerData),
    findOne: jest.fn().mockResolvedValue(producerData),
    remove: jest.fn().mockResolvedValue(producerData),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProducersService,
        {
          provide: 'ProducerRepository',
          useValue: mockProducerRepository,
        },
      ],
    }).compile();

    service = module.get<ProducersService>(ProducersService);
    repository = module.get('ProducerRepository');
  });

  it('definir o serviço', async () => {
    expect(service).toBeDefined();
  });

  it('criar um producer', async () => {
    const result = await service.create(producerData as CreateProducerDto);

    expect(repository.create).toHaveBeenCalledWith(producerData);
    expect(repository.save).toHaveBeenCalledWith(producerData);
    expect(result.message).toBe('Produtor adicionado com sucesso');
    expect(result.producer).toBeDefined();
  });

  it('atualizar o producer', async () => {
    const result = await service.updateByCNPJ(cnpj, updateData as any);

    expect(repository.findOne).toHaveBeenCalledWith({ where: { cnpj } });
    expect(repository.save).toHaveBeenCalledWith(
      expect.objectContaining(updateData),
    );
    expect(result.message).toBe(
      `Produtor de CNPJ ${cnpj} atualizado com sucesso`,
    );
  });

  it('deletar o producer', async () => {
    const result = await service.deleteByCNPJ({ cnpj } as DeleteProducerDto);

    expect(repository.findOne).toHaveBeenCalledWith({ where: { cnpj } });
    expect(repository.remove).toHaveBeenCalledWith(producerData);
    expect(result.message).toBe(
      `Produtor de CNPJ ${cnpj} deletado com sucesso`,
    );
  });
});
