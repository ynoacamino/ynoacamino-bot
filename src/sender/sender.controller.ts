import {
  Body,
  Controller, Get, Post,
} from '@nestjs/common';
import { SenderService } from './sender.service';
import { Message, messageSchema } from './sender.entity';

@Controller('send')
export class SenderController {
  constructor(
    private readonly senderService: SenderService,
  ) {}

  @Get()
  static getHello(): string {
    return 'Hello World!';
  }

  @Post()
  async sendMail(@Body() body: Message) {
    try {
      const message = messageSchema.parse(body);

      await this.senderService.sendMessage(message);

      return {
        message: 'Message sent',
      };
    } catch (error: any) {
      return {
        error: error.errors,
      };
    }
  }
}
