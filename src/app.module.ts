import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DiscordjsModule } from './discordjs/discordjs.module';
import { SenderModule } from './sender/sender.module';
import { ReplierModule } from './replier/replier.module';

@Module({
  imports: [
    DiscordjsModule,
    SenderModule,
    ReplierModule,
    ConfigModule.forRoot(),
  ],
})

export class AppModule {}
