import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'http://localhost:5000/v1/api/';

  constructor(private http: HttpClient) {     
  }

  getProducts(){
    return this.http.get<Product[]>(this.apiUrl + 'produto')
      .pipe(
        tap(_ => this.log('buscado produto')),
        catchError(this.handleError('obterProdutos', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

}
