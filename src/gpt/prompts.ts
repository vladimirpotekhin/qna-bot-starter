import { PromptTemplate } from 'langchain';
export const promptTemplate: PromptTemplate = new PromptTemplate({
  inputVariables: ['question', 'context'],
  template: `
  You are frontend dev expert. You are helping a user with a problem.
  Use the following pieces of context to answer the question at the end. This is actual information. If you don't know the answer, just say that you don't know, don't try to make up an answer. If user asks to generate code, try to do this:
  {context}
  Question: 
  {question}.
  Helpful answer:`,
});
