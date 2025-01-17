import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client } from 'discord.js';

@Injectable()
export class DiscordjsService extends Client implements OnModuleInit {
  constructor() {
    super({
      intents: 3276799,
    });
  }

  async onModuleInit() {
    this.login(process.env.DISCORD_TOKEN);
  }
}
