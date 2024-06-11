/*import { Component } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  creditCardDetails!:CreditCard;
  

  constructor(private creditCardService:CreditcardsService){
     this.creditCardService.getCreditCardById(30).subscribe((data:CreditCard)=>{
      this.creditCardDetails=data;
    })
  }

}
this is static binding code when i click on any button it is giving the same data which i pass in params in getcreditcardId(number)*/







// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CreditCard } from 'src/app/models/credit-card';
// import { CreditcardsService } from 'src/app/services/creditcards.service';
// @Component({
//   selector: 'app-view',
//   templateUrl: './view.component.html',
//   styleUrls: ['./view.component.scss']
// })
// export class ViewComponent implements OnInit {
//   creditCardDetails!: CreditCard;

//   constructor(
//     private creditCardService: CreditcardsService,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit() {
//     // Subscribe to route parameters
//     this.route.params.subscribe(params => {
//       const id = +params['id']; // The '+' converts the string to a number
//       this.getCreditCardDetails(id);
//     });
//   }

//   getCreditCardDetails(id: number) {
//     this.creditCardService.getCreditCardById(id).subscribe((data: CreditCard) => {
//       console.log('data', data);
//       this.creditCardDetails = data;
//     });
//   }
// }
// this is the method of providing with the help of ai tool to perform dyanmic routing by click on the certain









// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CreditCard } from 'src/app/models/credit-card';
// import { CreditcardsService } from 'src/app/services/creditcards.service';

// @Component({
//   selector: 'app-view',
//   templateUrl: './view.component.html',
//   styleUrls: ['./view.component.scss']
// })
// export class ViewComponent {

//   creditCardDetails!:CreditCard;
//   creditCardId:number;
  

//   constructor(private creditCardService:CreditcardsService, 
//     private router:ActivatedRoute){
//     this.creditCardId=parseInt(this.router.snapshot.paramMap.get("id")|| '');
//     this.creditCardService.getCreditCardById(this.creditCardId).subscribe((data:CreditCard)=>{
//       this.creditCardDetails=data;
//       })
//  }     
// }
 /*this is another method to perform dynamic binding (routing) code when i click on any button it is giving the 
 same data which i pass in params in getcreditcardId(number) and route on certain view page with a 
 selected id*/

 import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
 import { CreditCard } from 'src/app/models/credit-card';
 import { CreditcardsService } from 'src/app/services/creditcards.service';
 
 @Component({
   selector: 'app-view',
   templateUrl: './view.component.html',
   styleUrls: ['./view.component.scss']
 })
 export class ViewComponent implements OnInit {
   creditCardDetails!: CreditCard;
 
   constructor(
     private creditCardService: CreditcardsService,
     private route: ActivatedRoute
   ) {}
 
   ngOnInit() {
     // Subscribe to route parameters
     this.route.params.subscribe(params => {
       const id = params['id']; // Treat id as a string
       this.getCreditCardDetails(id);
     });
   }
 
   getCreditCardDetails(id: string) {
     this.creditCardService.getCreditCardById(id).subscribe((data: CreditCard) => {
       console.log('data', data);
       this.creditCardDetails = data;
     });
   }
 }
 