import { Module } from '@nestjs/common';
// import { ReplierModule } from 'src/replier/replier.module';
// import { ReplierModule } from 'src/replier/replier.module';
import { DiscordjsService } from './discordjs.service';

@Module({
  providers: [DiscordjsService],
  exports: [DiscordjsService],
  imports: [],
})
export class DiscordjsModule {}
