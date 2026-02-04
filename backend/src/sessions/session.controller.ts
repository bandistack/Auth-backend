import { Controller, Post, Body } from '@nestjs/common';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    return this.sessionService.login(body.username, body.password);
  }
}
