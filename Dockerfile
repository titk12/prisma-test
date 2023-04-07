FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma/

RUN yarn install

COPY . .

RUN yarn build
#RUN yarn prisma migrate deploy

#CMD [ "yarn", "run", "start:migrate:dev" ]
#CMD [ "node", "dist/src/main.js" ]


