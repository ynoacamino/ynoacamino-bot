import { Injectable } from '@nestjs/common';
import { DiscordjsService } from 'src/discordjs/discordjs.service';
import { getSendType, Message } from './sender.entity';

@Injectable()
export class SenderService {
  constructor(
    private readonly discordjsService: DiscordjsService,
  ) {}

  async sendMessage({ channelId, message, sendType }: Message) {
    const channel = this.discordjsService.channels.cache.get(channelId);

    const sendFlags = getSendType(sendType);

    if (channel && channel.isTextBased() && channel.isSendable()) {
      await channel.send({
        content: message,
        flags: sendFlags,
      });
    } else {
      console.error('Channel not found');
    }
  }
}
