# Não ok.
#  Estamos puxando a versão Linux alpine com Node do DockerHub
FROM node:10.9.0-alpine as nodealpine
#  Criando um diretório de trabalho para o nosso aplicativo. 
# WORKDIR /usr/src/app 
WORKDIR /app
EXPOSE 80
# Copiamos todos os arquivos package.json, incluindo o arquivo package-lock.json,
# para nosso diretório de trabalho atual
# COPY package*.json ./ 
COPY package*.json /app/
#  Instalando todas as dependências necessárias do arquivo package.json
RUN npm install
#  Copiamos todo o código fonte da nossa aplicação.
# COPY . .
COPY ./ /app/
ARG env=prod
#  Estamos construindo nossa aplicação.
RUN npm run build
# Estagio 2 - Será responsavel por expor a aplicação
#  Obtendo o servidor Web nginx no alpine
FROM  nginx:1.13.12-alpine 
#  Todos os nossos arquivos construídos estarão na pasta dist, então precisamos mover para a pasta do serviço do servidor da Web
# COPY --from=nodealpine /usr/src/app/dist /usr/share/nginx/html
COPY --from=nodealpine /app/dist/Angular607 /usr/share/nginx/html
# Estamos copiando nosso arquivo conf nginx para a localização requerida do arquivo conf do servidor web
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#  Encontrando um número de porta dinâmico para servir nosso aplicativo e gravá-lo no arquivo conf nginx, usando a interface de linha de comando sed.
# CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'