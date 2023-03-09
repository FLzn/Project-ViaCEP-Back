// nest
import { Controller, Get, Query } from '@nestjs/common';
// endregion

// services
import { ViacepService } from './viacep.service';
// endregion

@Controller('viacep')
export class ViacepController {
  constructor(
    private readonly viacepService: ViacepService,
  ) {}

  @Get()
  async getAddress(@Query('cep') cep: string): Promise<any> {
    return await this.viacepService.getAddress(cep);
  }
}
