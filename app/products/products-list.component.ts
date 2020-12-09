import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
   
import { IProduct } from './product';
import { IEmployee } from './employee';
import { ProductsService } from './products.service';
     
@Component({
  selector: 'prod-root',
  templateUrl: './product-list.component.html',
  styleUrls: ['../app.component.scss']
})


export class ProductsListComponent implements OnInit {
showList = false;
pageTitle = 'Product List';
errorMessage = '';

private productsUrl = 'api/products/products.json';
private empsUrl = 'api/products/employee.json';

products:  IProduct[] = [];
employees: IEmployee[] = [];

constructor(private productService: ProductsService) { }


 toggleView(): void {
    this.showList = !this.showList;
  }

 ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => this.errorMessage = err
    });
  }

}
