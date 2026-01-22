import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Credential } from './entities/credential.entity';
import { Role } from './entities/role.entity';
import { Permission } from './entities/permission.entity';
import { Session } from './entities/session.entity';
import { UserRole } from './entities/user-role.entity';
import { RolePermission } from './entities/role-permission.entity';
import { SessionModule } from './sessions/session.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bakergaps.sqlite', // archivo de base de datos
      entities: [User, Credential, Role, Permission, Session, UserRole, RolePermission],
      synchronize: true, // ⚠️ solo en desarrollo
    }),
    SessionModule,
  ],
})
export class AppModule {}
