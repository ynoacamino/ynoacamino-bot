import { Module } from '@nestjs/common';
import { DiscordjsModule } from 'src/discordjs/discordjs.module';
import { ReplierService } from './replier.service';

@Module({
  providers: [ReplierService],
  exports: [ReplierService],
  imports: [DiscordjsModule],
})
export class ReplierModule {}
