import { Test, TestingModule } from '@nestjs/testing';
import { ViacepController } from './viacep.controller';
import { ViacepService } from './viacep.service';
import axios from 'axios';

describe('ViacepController', () => {
  let controller: ViacepController;

  const mockViacepService = {
    getAddress: jest.fn(async cep => {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (data.erro) return { message: 'CEP Inválido.' };
      return {
        ...data
      }
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViacepController],
      providers: [ViacepService]
    }).overrideProvider(ViacepService)
      .useValue(mockViacepService)
      .compile();

    controller = module.get<ViacepController>(ViacepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return infos about a cep', async () => {
    const testCep = '04884-992';
    const errorCep = '12345-111';
    expect(await controller.getAddress(testCep)).toEqual({
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
    });

    expect(await controller.getAddress(errorCep)).toEqual({
      message: 'CEP Inválido.'
    })

    expect(mockViacepService.getAddress).toHaveBeenCalled();
  })
});
