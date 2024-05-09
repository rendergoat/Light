FROM node:20-alpine

RUN apk add --no-cache git

RUN git clone https://github.com/rendergoat/dockerthingproject-school.git

WORKDIR /dockerthingproject-school

RUN npm install

CMD npm start
