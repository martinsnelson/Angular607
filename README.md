#  Steps:

#1 - Instalar cli angular 6.0.7
npm install -g @angular/cli@6.0.7 

#2 - Verificar versão
ng --version


#Client Api marketplace(AspNetCoreAngular)

# Angular607

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#  Docker comandos
# Docker(Angular) aumentar o desempenho da construção, excluindo o diretório node_modules, criando o 
# arquivo .dockerignore no diretório de contexto e incluindo o nome da pasta no arquivo. .dockerignore
node_modules

# Construir a imagem docker com o nome angular
docker build -t angular .

# Executar Container Docker da Docker Image angular
docker run -p 80:80 --name angular-container -d angular

#  Heroku

#  Instalar o Heroku
npm install -g heroku

# Criar conta heroku
https://signup.heroku.com/

#  Login do Heroku
heroku container:login

#  Criar aplicativo heroku
heroku create

#  NGINX 
# configuração que irá dizer ao Nginx quais arquivos deverá servir
nginx-custom.conf

#  Implantação do Docker de Integração Contínua do GitLab para Heroku


#Git Branch
echo "# Angular607" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/martinsnelson/Angular607.git
git push -u origin master

#  Primeiro Build
PS C:\Projetos\Angular607> docker build -t angular .
Sending build context to Docker daemon  299.7MB
Step 1/10 : FROM node:10.9.0-alpine as nodealpine
10.9.0-alpine: Pulling from library/node
8e3ba11ec2a2: Pull complete
e883c863a46d: Pull complete
f84102466f54: Pull complete
Digest: sha256:a4212307484e6b662806a538ec6352182aaf8b4b748644aaa7f6e87bda159097
Status: Downloaded newer image for node:10.9.0-alpine
 ---> df2d34f007a1
Step 2/10 : WORKDIR /usr/src/app
 ---> Running in 88cba98b17c7
Removing intermediate container 88cba98b17c7
 ---> d213ce5baa4e
Step 3/10 : COPY package*.json ./
 ---> 062955863005
Step 4/10 : RUN npm install
 ---> Running in d49200d0e3d7

> node-sass@4.12.0 install /usr/src/app/node_modules/node-sass
> node scripts/install.js

Downloading binary from https://github.com/sass/node-sass/releases/download/v4.12.0/linux_musl-x64-64_binding.node
Download complete
Binary saved to /usr/src/app/node_modules/node-sass/vendor/linux_musl-x64-64/binding.node
Caching binary to /root/.npm/node-sass/4.12.0/linux_musl-x64-64_binding.node

> core-js@2.6.9 postinstall /usr/src/app/node_modules/core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> node-sass@4.12.0 postinstall /usr/src/app/node_modules/node-sass
> node scripts/build.js

Binary found at /usr/src/app/node_modules/node-sass/vendor/linux_musl-x64-64/binding.node
Testing binary
Binary is fine

> @angular/cli@6.0.8 postinstall /usr/src/app/node_modules/@angular/cli
> node ./bin/ng-update-message.js

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 1138 packages from 1290 contributors and audited 34102 packages in 59.145s
found 507 vulnerabilities (12 low, 495 high)
  run `npm audit fix` to fix them, or `npm audit` for details
Removing intermediate container d49200d0e3d7
 ---> 91c0c1532a1d
Step 5/10 : COPY . .
 ---> 64004169a48c
Step 6/10 : RUN npm run build
 ---> Running in 9a710a9691ff

> angular607@0.0.0 build /usr/src/app
> ng build

                                                                                          
Date: 2019-08-24T01:50:45.678Z
Hash: 09427f68391f1e7d249a
Time: 18246ms
chunk {main} main.js, main.js.map (main) 126 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 241 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 5.22 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 219 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.77 MB [initial] [rendered]
Removing intermediate container 9a710a9691ff
 ---> 89889a3373c5
Step 7/10 : FROM  nginx:1.13.12-alpine
1.13.12-alpine: Pulling from library/nginx
ff3a5c916c92: Pull complete
b430473be128: Pull complete
7d4e05a01906: Pull complete
8aeac9a3205f: Pull complete
Digest: sha256:9d46fd628d54ebe1633ee3cf0fe2acfcc419cfae541c63056530e39cd5620366
Status: Downloaded newer image for nginx:1.13.12-alpine
 ---> ebe2c7c61055
Step 8/10 : COPY --from=nodealpine /usr/src/app/dist /usr/share/nginx/html
 ---> 5c2269cc728f
Step 9/10 : COPY ./nginx.conf /etc/nginx/conf.d/default.conf
 ---> 7aabd8379d3a
Step 10/10 : CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
 ---> Running in dc28774b050a
Removing intermediate container dc28774b050a
 ---> 0bb744fa4cb3
Successfully built 0bb744fa4cb3
Successfully tagged angular:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.