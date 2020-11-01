FROM node:14-alpine

LABEL author="Dai Nguyen"

WORKDIR /front-end

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start"]