FROM node:alpine

WORKDIR /usr/nodejsapp
COPY ./package.json ./
RUN npm install
COPY ./ ./



CMD ["npm","start"]
