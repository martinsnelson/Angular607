FROM node:10.9.0-alpine as node
# FROM node:9.11.2-slim as node

LABEL authors="Nelson Martins"

WORKDIR /app

COPY package*.json /app/

RUN npm install
# RUN npm install -g @angular/cli@6.0.7

COPY ./ /app/

ARG env=production
# ARG env=prod
RUN npm run build

#  Caminho ninja com alpine
FROM nginx:alpine
# FROM nginx:1.13
COPY --from=node /app/dist/Angular607 /usr/share/nginx/html

#  Caminho ninja
COPY nginx.conf /etc/nginx/nginx.conf

#  Caminho ninja
# WORKDIR /usr/share/nginx/html

#  Caminho ninja
# COPY dist/ .

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'
