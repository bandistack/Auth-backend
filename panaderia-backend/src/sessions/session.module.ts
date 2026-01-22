import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { UsersModule } from '../users/user.module';

@Module({
  imports: [UsersModule],
  providers: [SessionService],
  controllers: [SessionController],
})
export class SessionModule {}
