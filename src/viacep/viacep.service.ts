import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Repository } from 'typeorm';
import ErrorViacep from './dto/error-viacep.dto';
import GetViacep from './dto/get-viacep.dto';
import { Viacep } from './entities/viacep.entity';
const { isOnlyNumbers } = require('../utils/functions');

@Injectable()
export class ViacepService {
  constructor(
    @InjectRepository(Viacep)
    private viacepModel: Repository<Viacep>
  ) {}

  async getAddress(userCep: string): Promise<GetViacep | ErrorViacep> {
    const newCep = userCep.replace('-', '');

    if (userCep.length === 9 && isOnlyNumbers(newCep) ) {
      const dataExists = await this.viacepModel.find({
        where: {
          cep: userCep
        }
      });

      if (!dataExists.length) {
        const { data } = await axios.get(`https://viacep.com.br/ws/${newCep}/json/`);
        if (data.erro) return { message: 'CEP inválido.' };

        await this.viacepModel.save(data);
        return data;
      }

      const { id, cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi } = dataExists[0];
      
      const response: GetViacep = {
        id,
        cep,
        logradouro,
        complemento,
        bairro,
        localidade,
        uf,
        ibge,
        gia,
        ddd,
        siafi
      };
      delete response.id;

      return response;
    }
    return { message: 'CEP inválido.' };
  }
}
