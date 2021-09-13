FROM node:latest

WORKDIR /Desktop/dev

COPY package*.json ./
RUN npm i
RUN npm install -g nodemon
RUN npm install -g ts-node
RUN npm install -g typescript

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
