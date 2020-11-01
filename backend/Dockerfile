FROM node:14-alpine

LABEL author="Dai Nguyen"

WORKDIR /instagram-clone

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8088

CMD [ "npm", "run", "start:dev"]