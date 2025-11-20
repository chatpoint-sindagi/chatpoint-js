import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/user.schema';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async register(name: string, phone: string, password: string) {
    const exists = await this.userModel.findOne({ phone });
    if (exists) throw new UnauthorizedException('Phone already registered');

    const hash = crypto.createHash('sha256').update(password).digest('hex');
    const user = await this.userModel.create({ name, phone, password: hash });

    return this.generateToken(user);
  }

  async login(phone: string, password: string) {
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    const user = await this.userModel.findOne({ phone, password: hash });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    return this.generateToken(user);
  }

  private generateToken(user: any) {
    const payload = { sub: user._id, phone: user.phone };
    return {
      access_token: this.jwtService.sign(payload),
      user: { _id: user._id, name: user.name, phone: user.phone },
    };
  }
}