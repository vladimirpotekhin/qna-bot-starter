import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { options } from './telegraf-config.factory';
import { GptModule } from '../gpt/gpt.module';

@Module({
  imports: [TelegrafModule.forRootAsync(options()), GptModule],
  providers: [TelegramService],
})
export class TelegramModule {}
