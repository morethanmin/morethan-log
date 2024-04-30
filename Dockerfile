FROM node:21-bookworm

RUN apt update && \
  apt install npm -y

WORKDIR /app
