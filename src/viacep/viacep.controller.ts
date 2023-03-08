import { Controller, Get, Query } from '@nestjs/common';
import { ViacepService } from './viacep.service';

@Controller('viacep')
export class ViacepController {
  constructor(
    private readonly viacepService: ViacepService,
  ) {}

  @Get()
  async getAdress(@Query('cep') cep: string): Promise<any> {
    return await this.viacepService.getAddress(cep);
  }
}
