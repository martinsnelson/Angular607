import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RegisterComponent } from './auth/register/register.component';
import { PathNotFoundComponent } from './shared/Components/path-not-found/path-not-found.component';

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
