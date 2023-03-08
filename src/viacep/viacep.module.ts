import { Module } from '@nestjs/common';
import { ViacepService } from './viacep.service';
import { ViacepController } from './viacep.controller';

@Module({
  providers: [ViacepService],
  controllers: [ViacepController]
})
export class ViacepModule {}
