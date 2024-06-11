import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CreditCard } from '../models/credit-card';
import {MatPaginator} from '@angular/material/paginator';/*this is used for pagination :-angulrmaterial*/
import { MatSort } from '@angular/material/sort'; 
import { CreditcardsService } from '../services/creditcards.service';



/*/*const TABLE_DATA:CreditCard[]=[ 
  // this is static  object where the data creation and used to show the object as per user having details
  {
    // this is an object that,s why we use commas for seprator 
    id:1,
    name:"Bank Of America",
    maxCredit:300,
    interestRate:10,
    active:true,
    reccomendedScore:'700-800',
    termsAndCondition:"following are the terms and conditions",
    createDate:'2023-31-08',
    updateDate:'2023-31-08',
    description:"bank of america offers customers with various Options",
    bankName:"Bank Of America"
  },
  {
    // this is an object that,s why we use commas for seprator 
    id:2,
    name:"Bank Of America",
    maxCredit:300,
    interestRate:10,
    active:true,
    reccomendedScore:'700-800',
    termsAndCondition:"following are the terms and conditions",
    createDate:'2023-31-08',
    updateDate:'2023-31-08',
    description:"bank of america offers customers with various Options",
    bankName:"Bank Of America"
  },
  {
    // this is an object that,s why we use commas for seprator 
    id:3,
    name:"Bank Of America",
    maxCredit:300,
    interestRate:10,
    active:true,
    reccomendedScore:'700-800',
    termsAndCondition:"following are the terms and conditions",
    createDate:'2023-31-08',
    updateDate:'2023-31-08',
    description:"bank of america offers customers with various Options",
    bankName:"Bank Of America"
  },
  {
    // this is an object that,s why we use commas for seprator 
    id:4,
    name:"Bank Of America",
    maxCredit:300,
    interestRate:10,
    active:true,
    reccomendedScore:'700-800',
    termsAndCondition:"following are the terms and conditions",
    createDate:'2023-31-08',
    updateDate:'2023-31-08',
    description:"bank of america offers customers with various Options",
    bankName:"Bank Of America"
  },
  {
    // this is an object that,s why we use commas for seprator 
    id:5,
    name:"Bank Of America",
    maxCredit:300,
    interestRate:10,
    active:true,
    reccomendedScore:'700-800',
    termsAndCondition:"following are the terms and conditions",
    createDate:'2023-31-08',
    updateDate:'2023-31-08',
    description:"bank of america offers customers with various Options",
    bankName:"Bank Of America"
  },
  {
    // this is an object that,s why we use commas for seprator 
    id:6,
    name:"Bank Of America",
    maxCredit:300,
    interestRate:10,
    active:true,
    reccomendedScore:'700-800',
    termsAndCondition:"following are the terms and conditions",
    createDate:'2023-31-08',
    updateDate:'2023-31-08',
    description:"bank of america offers customers with various Options",
    bankName:"Bank Of America"
  },
  {
    // this is an object that,s why we use commas for seprator 
    id:7,
    name:"Bank Of America",
    maxCredit:300,
    interestRate:10,
    active:true,
    reccomendedScore:'700-800',
    termsAndCondition:"following are the terms and conditions",
    createDate:'2023-31-08',
    updateDate:'2023-31-08',
    description:"bank of america offers customers with various Options",
    bankName:"Bank Of America"
  },
  {
    // this is an object that,s why we use commas for seprator 
    id:8,
    name:"Bank Of America",
    maxCredit:300,
    interestRate:10,
    active:true,
    reccomendedScore:'700-800',
    termsAndCondition:"following are the terms and conditions",
    createDate:'2023-31-08',
    updateDate:'2023-31-08',
    description:"bank of america offers customers with various Options",
    bankName:"Bank Of America"
  },
  {
    // this is an object that,s why we use commas for seprator 
    id:9,
    name:"Bank Of America",
    maxCredit:300,
    interestRate:10,
    active:true,
    reccomendedScore:'700-800',
    termsAndCondition:"following are the terms and conditions",
    createDate:'2023-31-08',
    updateDate:'2023-31-08',
    description:"bank of america offers customers with various Options",
    bankName:"Bank Of America"
  },
  {
    // this is an object that,s why we use commas for seprator 
    id:10,
    name:"Bank Of America",
    maxCredit:300,
    interestRate:10,
    active:true,
    reccomendedScore:'700-800',
    termsAndCondition:"following are the terms and conditions",
    createDate:'2023-31-08',
    updateDate:'2023-31-08',
    description:"bank of america offers customers with various Options",
    bankName:"Bank Of America"
  },
];*/


@Component({
  selector: 'app-credicards',
  templateUrl: './credicards.component.html',
  styleUrls: ['./credicards.component.scss']
})
export class CredicardsComponent 
{
 
  creditcards:CreditCard[]=[];
  dataSource: any;

  constructor( private creditcardsService: CreditcardsService){
    this.creditcardsService.getCreditCard().subscribe((data:CreditCard[])=>
    {
      this.creditcards=data ;
      this.dataSource=new MatTableDataSource(this.creditcards);
      this.dataSource.paginator = this.paginator as MatPaginator | null;
      this.dataSource.sort=this.sort as MatSort | null;
    })
  }

  displayColumns=[ "select","id","index","name","maxCredit","interestRate","active",
    "bankName","actions"
]



//  dataSource=new MatTableDataSource(TABLE_DATA);

selection=new SelectionModel(true,[]) /*used  to select the data from check box further */
   
@ViewChild(MatPaginator) paginator:MatPaginator | undefined;
@ViewChild(MatSort) sort:MatSort| undefined;

/* ngAfterViewInit(){this.dataSource.paginator = this.paginator as MatPaginator | null;
     this.dataSource.sort=this.sort as MatSort | null;}   
      (this method use to call the static data )*/

selectHandler(row :CreditCard)
{
  this.selection.toggle(row as never);
}



}
