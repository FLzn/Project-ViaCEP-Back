import { IsString } from "class-validator";

export default class ErrorViacep {
  @IsString()
  message: string;
}
