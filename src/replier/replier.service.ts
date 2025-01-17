import { Injectable } from '@nestjs/common';
import { Events, type Message } from 'discord.js';
import { DiscordjsService } from 'src/discordjs/discordjs.service';
import { ReplierComands } from './replier.entity';

@Injectable()
export class ReplierService {
  constructor(
    private readonly discordjsService: DiscordjsService,
  ) {
    discordjsService.on(Events.MessageCreate, this.messageCreate.bind(this));
  }

  async messageCreate(message: Message<boolean>) {
    if (message.author.bot) return;
    if (message.content === ReplierComands.PING) this.pingEvent(message);
  }

  async pingEvent(message: Message<boolean>) {
    const delay = Date.now() - message.createdTimestamp;
    const content = `Pong! ${delay}ms`;

    this.replyMessage(message, content);
  }

  async replyMessage(message: Message<boolean>, content: string) {
    const channelID = message.channelId;
    const messageID = message.id;

    const channel = this.discordjsService.channels.cache.get(channelID);

    if (channel && channel.isTextBased() && channel.isSendable()) {
      await channel.send({
        content,
        reply: {
          messageReference: messageID,
        },
      });
    } else {
      console.error('Channel not found');
    }
  }
}
