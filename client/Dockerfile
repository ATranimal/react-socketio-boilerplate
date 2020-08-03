FROM node:12-alpine

RUN npm install react-scripts@3.3.1 -g --silent

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ./package.json ./yarn.lock ./

RUN yarn

EXPOSE 80

CMD ./start.sh