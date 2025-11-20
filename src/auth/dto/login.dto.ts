import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString() @IsNotEmpty() name: string;
  @IsString() @IsNotEmpty() @MinLength(10) phone: string;
  @IsString() @IsNotEmpty() @MinLength(4) password: string;
}

export class LoginDto {
  @IsString() @IsNotEmpty() phone: string;
  @IsString() @IsNotEmpty() password: string;
}