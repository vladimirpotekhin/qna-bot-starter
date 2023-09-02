import { FaissStore } from 'langchain/vectorstores/faiss';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import * as dotenv from 'dotenv';
import { loadDocs } from './text-loader';

dotenv.config();

export const run = async () => {
  console.info('Loading docs...');
  const docs = await loadDocs();
  console.info('Docs loaded');

  console.info('Loading vector store...');

  const vectorStore = await FaissStore.fromDocuments(
    docs,
    new OpenAIEmbeddings(),
  );

  console.info('Vector store loaded');

  console.info('Saving vector store...');
  await vectorStore.save('vector-store');
  console.info('Vector store saved in "vector-store" folder');
};

run();
