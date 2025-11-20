import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: RegisterDto): Promise<{
        access_token: string;
        user: {
            _id: any;
            name: any;
            phone: any;
        };
        success: boolean;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            _id: any;
            name: any;
            phone: any;
        };
        success: boolean;
    }>;
}
