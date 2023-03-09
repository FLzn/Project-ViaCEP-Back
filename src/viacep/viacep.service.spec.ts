import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Viacep } from './entities/viacep.entity';
import { ViacepService } from './viacep.service';

describe('ViacepService', () => {
  let service: ViacepService;
  let viacepModel: Viacep;

  const mockViacepRepository = {
    find: jest.fn().mockReset(),
    save: jest.fn().mockImplementation(cep => Promise.resolve({
      id: 1,
      ...cep
    }))
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViacepService, {
        provide: getRepositoryToken(Viacep),
        useValue: {mockViacepRepository}
      }],
    }).compile();

    service = module.get<ViacepService>(ViacepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return cep infos of viacep api or database', async () => {
    const cep = '04884-992';
    expect(await service.getAddress(cep)).toEqual({
      cep: expect.any(String),
      logradouro: expect.any(String),
      complemento: expect.any(String) || '',
      bairro: expect.any(String),
      localidade: expect.any(String),
      uf: expect.any(String),
      ibge: expect.any(String),
      gia: expect.any(String) || '',
      ddd: expect.any(String),
      siafi: expect.any(String)
    })
  })
});
