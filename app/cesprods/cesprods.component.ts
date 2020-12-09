import { Component, OnInit } from '@angular/core';

import {ProductsCesComponent} from '../products/products-ces.component';

@Component({
  selector: 'app-cesprods',
  templateUrl:'cesprods.component.html',
  styleUrls: ['./cesprods.component.scss']
})
export class CesprodsComponent {

  constructor() { 
							
  }

  ngOnInit(): void {

  }

columnDefs = this.columnDefs;

 columnDefs = [
        { field: 'Name' },
        { field: 'Price' },
        { field: 'Catagory' }
    ];

   rowData = this.rowData; 
   rowData = [
  { "Name": "Eaton BR120AF BR AFCI Circuit Breaker", "Price" : 2.50, "Catagory": "Power Distribution / Arc Fault"},
  { "Name": "Eaton CHFCAF115 AFCI Circuit Breaker, 15A, 10 kAIC, Single-Pole, 120/240V", "Price" : 3, "Catagory": "Power Distribution / Arc Fault"},
  { "Name": "Elite Lighting B26IC-AT-W 6 inch Shallow Recessed Mount Fixture, 120V, 60/65/75W, Metallic Gray", "Price" : 4, "Catagory": "Lighting / Recessed Lighting / Recessed In Ceiling Housing"},
  { "Name": "Elite Lighting B26RIC-AT-W 6 Inch Shallow IC Remodel Housing", "Price" : 6.00, "Catagory": "Lighting / Recessed Lighting / Recessed In Ceiling Housing"},
  { "Name": "Duracell PC2400 Alkaline-Manganese Dioxide Battery", "Price" : 1.50, "Catagory": "Battery / Batteries / AAA thru 9 Volt Batteries / Battery Type AAA"},
  { "Name": "Duracell PC2300 Alkaline-Manganese Dioxide Battery", "Price" : 1.50, "Catagory": "Battery / Batteries / AAA thru 9 Volt Batteries / Battery Type AAA"},
  { "Name": "Duracell PC2200 Alkaline-Manganese Dioxide Battery", "Price" : 1.50, "Catagory": "Battery / Batteries / AAA thru 9 Volt Batteries / Battery Type AAA"}
    ];

}


   