import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

//import { AgGridModule } from '@ag-grid-community/angular';
import { AgGridModule } from 'ag-grid-angular';  //works with either now
import { ProductsModule } from './products/products.module';
//import {ProductsListComponent} from './products/products-list.component';
import { CesprodsComponent } from './cesprods/cesprods.component';
import { CesempsstgComponent } from './cesempsstg/cesempsstg.component';

@NgModule({
  imports: [ 
  BrowserModule, 
  FormsModule, 
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'cesempsstg', component: CesempsstgComponent },
      { path: 'cesprods', component: CesprodsComponent },
      { path: '', redirectTo: '/index.html', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }   
    ]),
  AgGridModule.withComponents([ ]),
  ProductsModule
  ],
    declarations: 
   [ AppComponent, WelcomeComponent, CesprodsComponent, CesempsstgComponent],
  bootstrap:   
   [ AppComponent ]
})
export class AppModule { }
