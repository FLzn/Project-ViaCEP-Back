import { Module } from '@nestjs/common';
import { ViacepService } from './viacep.service';
import { ViacepController } from './viacep.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Viacep } from './entities/viacep.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Viacep])
  ],
  providers: [ViacepService],
  controllers: [ViacepController],
  exports: [ViacepService]
})
export class ViacepModule {}
