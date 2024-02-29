FROM node:alpine

WORKDIR /usr/visitorapp
COPY ./package.json ./
RUN npm install
COPY ./ ./



CMD ["npm","start"]
