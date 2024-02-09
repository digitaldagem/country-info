FROM node:14 as build

WORKDIR /

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:14-alpine

WORKDIR /

COPY --from=build /build /build

EXPOSE 3000

CMD ["npx", "serve", "-s", "build"]]