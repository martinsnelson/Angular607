import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RegisterComponent } from './auth/register/register.component';
import { PathNotFoundComponent } from './shared/Components/path-not-found/path-not-found.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
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
    path: 'user/:userName', 
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    },
    data: { title: 'Fotos' }
  },
  {
    path: 'produto',
    component: ProductListComponent,
    data: { title: 'Lista de Produtos' }
  },
  {
    path: '**', 
    component: PathNotFoundComponent 
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
