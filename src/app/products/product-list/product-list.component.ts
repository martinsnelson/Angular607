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
  
  titulo = 'Leão';
  url = 'https://osegredo.com.br/wp-content/uploads/2018/07/signo-de-leao-830x450.jpg';

  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  
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
    this.router.navigate(['register']);
  }

  produtoAdd() {
    this.router.navigate(['adicionar-produto']);
  }

}
