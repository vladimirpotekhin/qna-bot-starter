import { Module } from '@nestjs/common';
import { GptModule } from './gpt/gpt.module';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    GptModule,
    TelegramModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
