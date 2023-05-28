import { Component,OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit{
  
  //create an array of objects
  salesPersonList:SalesPerson[]=[
    new SalesPerson("Veronica","perez","vero@hotmail.com",5000),
    new SalesPerson("Arely","Vite","arely.vite@hotmail.com",3500),
    new SalesPerson("Miriam","Rosario","rosario@hotmail.com",9500),
    new SalesPerson("Monica","Ponce","vero@hotmail.com",2000),
  ];
constructor(){}

  ngOnInit(): void {
    
  }

}
