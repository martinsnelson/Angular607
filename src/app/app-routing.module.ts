import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RegisterComponent } from './auth/register/register.component';
import { PathNotFoundComponent } from './shared/Components/errors/path-not-found/path-not-found.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'registrar',
    component: RegisterComponent,
    data: { title: 'Registrar' }
  },
  {
    path: 'produto-lista',
    component: ProductListComponent,
    data: { title: 'Lista de Produtos' }
  },
  {
    path: 'adicionar-produto',
    component: ProductAddComponent,
    data: { title: 'Adicionar Produto' }
  },
  {
    path: 'lista-tarefas',
    component: TodoListComponent,
    data: { title: 'Adicionar Tarefa' }
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    },
    data: { title: 'Fotos' }
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
