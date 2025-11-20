import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto/login.dto';

@Controller('api/user')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: RegisterDto) {
    const result = await this.authService.register(dto.name, dto.phone, dto.password);
    return { success: true, ...result };
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const result = await this.authService.login(dto.phone, dto.password);
    return { success: true, ...result };
  }
}