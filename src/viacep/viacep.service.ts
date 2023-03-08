import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ViacepService {
  constructor() {}

  async getAddress(cep: string): Promise<any> {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return data;
  }
}
