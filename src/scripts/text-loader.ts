import { TextLoader } from 'langchain/document_loaders/fs/text';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';

export const loadDocs = async () => {
  const loader = new DirectoryLoader('src/scripts/new-docs', {
    '.txt': (path) => new TextLoader(path),
  });

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 2800,
    chunkOverlap: 200,
  });

  const docs = await loader.loadAndSplit(splitter);

  return docs;
};
