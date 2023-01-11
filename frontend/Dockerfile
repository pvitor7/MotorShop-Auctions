FROM node:16.15.1

ENV PORT=3001

EXPOSE 3001

WORKDIR /app

COPY 'package.json' .

RUN yarn 

COPY . .

CMD ["yarn", "start"]
