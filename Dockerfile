FROM node:18-alpine AS base

RUN mkdir -p /usr/app/
WORKDIR /usr/app

COPY ./ ./

RUN npm install
#RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]
