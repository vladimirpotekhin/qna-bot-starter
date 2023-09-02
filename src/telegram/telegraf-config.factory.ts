import { ConfigService } from '@nestjs/config';
import { TelegrafModuleAsyncOptions } from 'nestjs-telegraf';
import { TelegrafModuleOptions } from 'nestjs-telegraf/dist/interfaces/telegraf-options.interface';

const telegrafModuleOptions: (
  config: ConfigService,
) => TelegrafModuleOptions = (configService) => ({
  token: configService.get('TG_API'),
  options: {
    handlerTimeout: 200000,
  },
});

export const options = (): TelegrafModuleAsyncOptions => {
  return {
    inject: [ConfigService],
    useFactory: telegrafModuleOptions,
  };
};
