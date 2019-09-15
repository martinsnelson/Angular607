FROM node:10.9.0-alpine as node
# FROM node:9.11.2-slim as node

LABEL authors="Nelson Martins"

WORKDIR /app
EXPOSE 80

COPY package*.json /app/

RUN npm install
# RUN npm install -g @angular/cli@6.0.7

COPY ./ /app/

ARG env=production
# ARG env=prod
RUN npm run build

#  Caminho ninja com alpine
# FROM nginx:alpine
# FROM nginx:1.13
FROM nginx:1.17.3
# COPY --from=node /app/dist/Angular607 /usr/share/nginx/html
COPY --from=node /app/dist/ /usr/share/nginx/html

#  Caminho ninja
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf

#  Caminho ninja
# WORKDIR /usr/share/nginx/html

#  Caminho ninja
# COPY dist/ .
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
# CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'