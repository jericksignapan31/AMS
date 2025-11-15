# NestJS Backend Integration Guide

## ✅ Completed Setup

### 1. Environment Configuration
- ✅ Created `environment.ts` (production)
- ✅ Created `environment.development.ts` (development)
- Default API URL: `http://localhost:3000/api`

### 2. Services Updated
- ✅ **AuthService**: Now uses POST to `/api/auth/login`
- ✅ **AssetService**: Uses environment-based API URLs
- ✅ **HTTP Interceptor**: Automatically adds JWT tokens to requests

### 3. Authentication Flow
- Login sends POST request to NestJS backend
- Backend returns JWT token
- Token is stored in localStorage
- Interceptor adds token to all subsequent requests

### 4. JSON Server Removed
- ✅ **json-server package uninstalled**
- ✅ **All references to localhost:3001 removed**
- ✅ **Package.json cleaned up**
- All data now comes from NestJS backend exclusively

---

## 📋 Next Steps for NestJS Backend

### Step 1: Create Auth Module in NestJS

```bash
cd your-nestjs-project
nest g module auth
nest g controller auth
nest g service auth
```

### Step 2: Create Auth DTOs

Create `src/auth/dto/login.dto.ts`:
```typescript
export class LoginDto {
  email: string;
  password: string;
}
```

### Step 3: Create User Entity/Interface

Create `src/users/entities/user.entity.ts`:
```typescript
export class User {
  user_id: string;
  email: string;
  password: string;
  FirstName: string;
  LastName: string;
  Department: string;
  MobileNo: string;
  Campus: string;
  role: string;
  profileImage?: string;
}
```

### Step 4: Install Required Packages

```bash
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
npm install -D @types/passport-jwt @types/bcrypt
```

### Step 5: Create Auth Controller

In `src/auth/auth.controller.ts`:
```typescript
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
```

### Step 6: Create Auth Service

In `src/auth/auth.service.ts`:
```typescript
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    // Inject your UserService here
  ) {}

  async login(loginDto: LoginDto) {
    // Find user by email
    const user = await this.findUserByEmail(loginDto.email);
    
    if (!user) {
      return { success: false, message: 'Invalid email or password' };
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    
    if (!isPasswordValid) {
      return { success: false, message: 'Invalid email or password' };
    }

    // Generate JWT token
    const payload = { 
      sub: user.user_id, 
      email: user.email,
      role: user.role 
    };
    
    const token = this.jwtService.sign(payload);

    // Remove password from response
    const { password, ...userWithoutPassword } = user;

    return {
      success: true,
      user: {
        ...userWithoutPassword,
        token
      }
    };
  }

  private async findUserByEmail(email: string) {
    // Implement your user lookup logic here
    // This could be from database, JSON file, etc.
  }
}
```

### Step 7: Configure JWT Module

In `src/auth/auth.module.ts`:
```typescript
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret-key-change-this',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
```

### Step 8: Create JWT Strategy

Create `src/auth/jwt.strategy.ts`:
```typescript
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'your-secret-key-change-this',
    });
  }

  async validate(payload: any) {
    return { 
      userId: payload.sub, 
      email: payload.email,
      role: payload.role 
    };
  }
}
```

### Step 9: Create JWT Auth Guard

Create `src/auth/guards/jwt-auth.guard.ts`:
```typescript
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
```

### Step 10: Enable CORS in NestJS

In `src/main.ts`:
```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for Angular frontend
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true,
  });
  
  await app.listen(3000);
}
bootstrap();
```

### Step 11: Create Protected Routes Example

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller('api/assets')
export class AssetsController {
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.assetsService.findAll();
  }
}
```

---

## 🔧 Environment Variables

Create `.env` file in your NestJS project:
```env
JWT_SECRET=your-super-secret-key-change-this-in-production
DATABASE_URL=your-database-connection-string
PORT=3000
```

---

## 🧪 Testing the Integration

### 1. Start NestJS Backend
```bash
npm run start:dev
```
Backend should be running on `http://localhost:3000`

### 2. Start Angular Frontend
```bash
npm run start
```
Frontend should be running on `http://localhost:4200`

### 3. Test Login
- Open browser to `http://localhost:4200/login`
- Enter credentials
- Check Network tab for POST to `http://localhost:3000/api/auth/login`
- Verify JWT token in localStorage

---

## 📝 API Endpoints Structure

Your NestJS backend should expose these endpoints:

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration (optional)
- `POST /api/auth/logout` - User logout (optional)

### Assets
- `GET /api/assets` - Get all assets
- `GET /api/assets/:id` - Get single asset
- `POST /api/assets` - Create asset
- `PUT /api/assets/:id` - Update asset
- `DELETE /api/assets/:id` - Delete asset

### Reference Data
- `GET /api/locations` - Get all locations
- `GET /api/suppliers` - Get all suppliers
- `GET /api/programs` - Get all programs
- `GET /api/statuses` - Get all statuses
- `GET /api/colors` - Get all colors
- `GET /api/brands` - Get all brands

### Maintenance Requests
- `GET /api/maintenance-requests` - Get all requests
- `POST /api/maintenance-requests` - Create request
- `PUT /api/maintenance-requests/:id` - Update request
- `DELETE /api/maintenance-requests/:id` - Delete request

---

## 🔐 Security Best Practices

1. **Never commit JWT_SECRET to repository**
2. **Use environment variables**
3. **Hash passwords with bcrypt**
4. **Validate all inputs with DTOs**
5. **Use HTTPS in production**
6. **Implement rate limiting**
7. **Add request validation**

---

## 🐛 Troubleshooting

### CORS Error
- Ensure `app.enableCors()` is configured in NestJS
- Check origin matches your Angular dev server

### 401 Unauthorized
- Verify JWT token is being sent in headers
- Check token hasn't expired
- Verify JWT_SECRET matches between sign and verify

### Connection Refused
- Ensure NestJS backend is running
- Check port 3000 is available
- Verify API URL in environment files

---

## 📚 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Passport JWT Strategy](https://www.passportjs.org/packages/passport-jwt/)
- [Angular HTTP Client](https://angular.io/guide/http)
