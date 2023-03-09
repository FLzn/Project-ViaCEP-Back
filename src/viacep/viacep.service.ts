import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Repository } from 'typeorm';
import ErrorViacep from './dto/error-viacep.dto';
import GetViacep from './dto/get-viacep.dto';
import { Viacep } from './entities/viacep.entity';
const { isCep } = require('../utils/functions');

@Injectable()
export class ViacepService {
  constructor(
    @InjectRepository(Viacep)
    private viacepModel: Repository<Viacep>
  ) {}

  async getAddress(userCep: string): Promise<GetViacep | ErrorViacep> {
    if (!isCep) throw new HttpException('CEP Inválido.', HttpStatus.BAD_REQUEST);

    const cleanCep = userCep.replace('-', '');
    
    const dataExists = await this.viacepModel.findOne({
      where: {
        cep: userCep
      }
    });

    if (dataExists) {
      const response: GetViacep = {
        ...dataExists
      };
      delete response.id;
      return response;
    }

    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cleanCep}/json/`);

      if (data.erro) throw new HttpException('CEP não encontrado.', HttpStatus.NOT_FOUND);

      const response = await this.viacepModel.save(data);
      delete response.id;
      return response;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
