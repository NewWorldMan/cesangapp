import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
    template:`
    <nav class='navbar navbar-expand-md navbar-light bg-light'>
        <a class='navbar-brand'>Greetings</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link ' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link ' routerLinkActive='active' [routerLink]="['/cesprods']">CES Products</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/cesempsstg']">CES Employees</a>
          </li>
          <li><a class='nav-link hover' routerLinkActive='active' [routerLink]="['/clients']">Remote Data</a>
          </li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  title = 'CES-Demoapp';

testmode = false;
showList = true;

  items = [];
  pageOfItems: Array<any>;

  constructor() { }

  toggleView(): void {
    this.showList = !this.showList;
  }


  ngOnInit() {
        // an example array of 150 items to be paged
        this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
    }

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }

   columnDefs = [
  { field: 'userId' },
  { field: 'jobTitleName' },
  { field: 'firstName' },
  { field: 'lastName' },
  { field: 'preferredFullName' },
  { field: 'employeeCode' },
  { field: 'region' },
  { field: 'phoneNumber' },
  { field: 'emailAddress' }
];

  rowData =  [
{"userId":"rirani","jobTitleName":"Developer","firstName":"Romin","lastName":"Irani","preferredFullName":"Romin Irani","employeeCode":"E1","region":"CA","phoneNumber":"408-1234567","emailAddress":"romin.k.irani@gmail.com"},
{"userId":"nirani","jobTitleName":"Developer","firstName":"Neil","lastName":"Irani","preferredFullName":"Neil Irani","employeeCode":"E2","region":"CA","phoneNumber":"408-1111111","emailAddress":"neilrirani@gmail.com"},
{"userId":"thanks","jobTitleName":"Program Directory","firstName":"Tom","lastName":"Hanks","preferredFullName":"Tom Hanks","employeeCode":"E3","region":"CA","phoneNumber":"408-2222222","emailAddress":"tomhanks@gmail.com"}
];

}
