import { Model } from 'mongoose';
import { User } from '../users/user.schema';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    register(name: string, phone: string, password: string): Promise<{
        access_token: string;
        user: {
            _id: any;
            name: any;
            phone: any;
        };
    }>;
    login(phone: string, password: string): Promise<{
        access_token: string;
        user: {
            _id: any;
            name: any;
            phone: any;
        };
    }>;
    private generateToken;
}
