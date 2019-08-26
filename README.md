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

docker tag angular registry.heroku.com/cbarato/web
docker push registry.heroku.com/cbarato/web
heroku container:release web --app=cbarato

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

#  Git Lab
Git global setup
git config --global user.name "Nelson Martins"
git config --global user.email "nelsontecti@gmail.com"

Create a new repository
git clone https://gitlab.com/nelsontecti/cbaratomkapp.git
cd cbaratomkapp
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Push an existing folder
cd existing_folder
git init
git remote add origin https://gitlab.com/nelsontecti/cbaratomkapp.git
git add .
git commit -m "Initial commit"
git push -u origin master

Push an existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin https://gitlab.com/nelsontecti/cbaratomkapp.git
git push -u origin --all
git push -u origin --tags

git branch --set-upstream
git push -u origin my_branch

COPY ./nginx.conf /etc/nginx/nginx.conf