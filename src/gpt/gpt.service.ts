import { Injectable, Logger } from '@nestjs/common';
import { loadQAStuffChain } from 'langchain/chains';
import { OpenAI } from 'langchain';
import { promptTemplate } from './prompts';
import { StoreService } from './store.service';

@Injectable()
export class GptService {
  private readonly logger = new Logger(GptService.name);
  private model = new OpenAI({
    temperature: 0,
    modelName: 'gpt-3.5-turbo',
    maxTokens: 3000,
  });

  private chain = loadQAStuffChain(this.model, {
    verbose: true,
    prompt: promptTemplate,
  });

  constructor(private readonly store: StoreService) {}

  async generateResponse(question: string): Promise<string> {
    try {
      const relevantDocs = await this.store.faissStore.similaritySearch(
        question,
        1,
      );

      const answer = await this.chain.call({
        input_documents: relevantDocs,
        question,
      });

      return answer.text;
    } catch (e) {
      this.logger.error(e);
      return 'Something went wrong';
    }
  }
}
