import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/user.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class SessionService {
  constructor(private readonly usersService: UsersService) {}

  async login(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    if (!user) throw new UnauthorizedException('Usuario no encontrado');

    // Aquí usamos el hash que está en Credential
    const isValid = await bcrypt.compare(
      password,
      user.credential.passwordHash,
    );
    if (!isValid) throw new UnauthorizedException('Credenciales inválidas');

    // Aquí podrías devolver un JWT, por ahora devolvemos el usuario
    return { message: 'Login exitoso', user };
  }
}
