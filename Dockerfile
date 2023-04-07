FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma/
RUN yarn install

COPY . .

RUN yarn run prisma generate
RUN yarn build

CMD [ "yarn", "run", "start:migrate:prod" ]

