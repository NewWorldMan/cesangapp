import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AgGridModule } from '@ag-grid-community/angular';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
    //import { AgGridModule } from 'ag-grid-angular';
    //import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
        
export class ProductsService {

private productsUrl = 'api/products/products.json';
private empsUrl = 'api/products/employees.json';

constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
    getProduct(name: string): Observable<IProduct | undefined> {
    return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.prodName === name))
      );
     // -doesn't work here--.> console.log('prod array'+p.prodName);
  }

    getEmps(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.empsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }


  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

      
}
