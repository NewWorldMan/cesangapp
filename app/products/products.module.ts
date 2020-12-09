import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list.component';
   //import { ConvertToSpacesPipe } from '../app/convert-to-spaces.pipe';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent }
    ]),
  ],
  declarations: [
    ProductsListComponent
  ]
})
export class ProductsModule { }
