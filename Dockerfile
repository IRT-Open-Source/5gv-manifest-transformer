FROM node:latest
WORKDIR /usr/manifest-transformer
COPY ./*.json ./
RUN npm install
RUN npm i -g @nestjs/cli
