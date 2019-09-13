import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[] = [];
  showColumns: string[] = ['produtoID', 'nome', 'descricao'];
  loadingResult = true;

  constructor(private produtoService: ProductService, 
              private authService: AuthService, 
              private router: Router) { 
  }
  

  ngOnInit() {
    this.getProducts();
  }


  getProducts():void {
    this.produtoService.getProducts()
      .subscribe(produtos => {
        this.products = produtos;
        console.log(this.products);
        this.loadingResult = false;
      }, err => {
        console.log(err);
        this.loadingResult = false;
      });
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }


  produtoAdd() {
    this.router.navigate(['adicionar-produto']);
  }
}
