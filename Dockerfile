FROM node:16-alpine AS dev

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn install --production

COPY . .

CMD ["yarn", "dev"]


FROM node:16-alpine AS build

WORKDIR /usr/src/app

COPY --from=dev /usr/src/app .

RUN yarn prisma generate && yarn build

EXPOSE 3000

CMD ["yarn", "dev"]
