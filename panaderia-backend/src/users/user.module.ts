import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { User } from '../entities/user.entity';
import { Credential } from '../entities/credential.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Credential])], // 👈 agrega Credential aquí
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
