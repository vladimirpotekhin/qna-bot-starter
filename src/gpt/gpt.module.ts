import { Module } from '@nestjs/common';
import { GptService } from './gpt.service';
import { HttpModule } from '@nestjs/axios';
import { StoreService } from './store.service';

@Module({
  imports: [HttpModule],
  providers: [GptService, StoreService],
  exports: [GptService, StoreService],
})
export class GptModule {}
