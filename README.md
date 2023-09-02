# QnA bot starter

## Description

**QnA bot starter** is telegram bot using gpt, langchain and faiss to answer a question from the documentation
Experimental project.

## Installation

```bash
$ npm ci
```

## Running the app

First, set envs. You can use .env.example file as example

Second, you must have a vector store. Default vector storage in "vector-store" folder. It filled with example documentation. 
You can use it or remove it and create your own vector store by running `npm run vector-store`. See scripts section

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Scripts

create vector store using faiss 

1. Put docs inside src/scripts/new-docs folder
2. run `npm run vector-store`

## Envs

`OPENAI_API_KEY` - openai api key

`TG_API` - telegram bot token

## Main libs

[Nest JS](https://github.com/nestjs/nest)

[Telegraf](https://github.com/telegraf/telegraf)

[Langchain](https://js.langchain.com/docs/use_cases/question_answering)
