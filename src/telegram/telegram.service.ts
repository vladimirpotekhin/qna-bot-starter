import { ConfigService } from '@nestjs/config';
import { Ctx, Message, On, Start, Update } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';
import { GptService } from '../gpt/gpt.service';
import { TgMessage } from '../interfaces/telegram';
import { StoreService } from '../gpt/store.service';

@Update()
export class TelegramService extends Telegraf<SceneContext> {
  constructor(
    private readonly configService: ConfigService,
    private readonly gpt: GptService,
    private readonly storeService: StoreService,
  ) {
    super(configService.get('TG_API'));
  }

  @Start()
  onStart(@Ctx() ctx: SceneContext) {
    ctx.replyWithHTML(`<b>Hello, </b> ${ctx.from.username}`);
  }

  @On('text')
  async onMessage(@Message() message: TgMessage, @Ctx() ctx: SceneContext) {
    const replyTo = message.reply_to_message
      ? message.reply_to_message.message_id
      : message.message_id;
    const input = message.reply_to_message
      ? message.reply_to_message.text || message.text
      : message.text;

    await ctx.reply('Ушел думать...', {
      reply_to_message_id: replyTo,
    });

    const response = await this.gpt.generateResponse(input);

    await ctx.replyWithMarkdownV2(
      response?.replace(/([|{\[\]*_~}+)(#>!=\-.])/gm, '\\$1'),
      {
        reply_to_message_id: replyTo,
        parse_mode: 'MarkdownV2',
      },
    );
  }
}
