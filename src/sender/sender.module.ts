import { Module } from '@nestjs/common';
import { DiscordjsModule } from 'src/discordjs/discordjs.module';
import { SenderService } from './sender.service';
import { SenderController } from './sender.controller';

@Module({
  providers: [SenderService],
  exports: [SenderService],
  imports: [DiscordjsModule],
  controllers: [SenderController],
})
export class SenderModule {}
