import { Injectable } from '@nestjs/common';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { FaissStore } from 'langchain/vectorstores/faiss';
import { Document } from 'langchain/document';

@Injectable()
export class StoreService {
  private embeddings = new OpenAIEmbeddings();

  private store: FaissStore;

  constructor() {
    this.loadStore();
  }

  get faissStore(): FaissStore {
    return this.store;
  }

  async addDocuments(docs: Document[]) {
    await this.faissStore.addDocuments(docs);
    await this.faissStore.save('vector-store');
  }

  private async loadStore() {
    this.store = await FaissStore.load('vector-store', this.embeddings);
  }
}
