FROM node:20-alpine

RUN apk add --no-cache git

RUN git clone https://github.com/rendergoat/light.git

WORKDIR /dockerthingproject-school

RUN npm install

CMD npm start
