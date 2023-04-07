FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn run prisma generate
RUN yarn build

CMD ["node", "./dist/main.js"]