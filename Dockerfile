FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma/

RUN yarn install

COPY . .

RUN yarn build

CMD [ "yarn", "run", "start:migrate:prod" ]

