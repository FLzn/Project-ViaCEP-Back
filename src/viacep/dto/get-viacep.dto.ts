import { IsEmpty } from "class-validator";
import { IsNotEmpty, IsString } from "class-validator/types/decorator/decorators";

export default class GetViacep {
  @IsEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  cep: string;

  @IsNotEmpty()
  @IsString()
  logradouro: string;

  @IsString()
  complemento: string;

  @IsNotEmpty()
  @IsString()
  bairro: string;

  @IsNotEmpty()
  @IsString()
  localidade: string;

  @IsNotEmpty()
  @IsString()
  uf: string;

  @IsString()
  ibge: string;

  @IsString()
  gia: string;

  @IsNotEmpty()
  @IsString()
  ddd: string;

  @IsString()
  siafi: string;
}
