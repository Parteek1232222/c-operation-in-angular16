import { Component ,OnInit,inject} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  toaster=inject(ToastrService);
  creditCardForm: FormGroup | undefined;

  constructor(private CreditcardsService:CreditcardsService ,private router:Router) {

  }

  newCreditCard:any=
  {
   
    name: "",
    maxCredit: 0,
    interestRate: 0,
    active: false,
    reccomendedScore: '',
    termsAndCondition: '',
    createDate: '',
    updateDate: "",
    description: '',
    bankname: ''
  };

 saveCreditCard(){
  
  console.log("the user added")
  this.CreditcardsService.createCreditCards(this.newCreditCard).subscribe(data=>{
    
    // alert("the new card is added");
    // this.toastr.error('There was an error adding the new card.', 'Error');  // Show error toastr
    this.toaster.success("added");
    this.router.navigate(['creditcards'])
  })




 }
}
















// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CreditcardsService } from 'src/app/services/creditcards.service';

// @Component({
//   selector: 'app-add',
//   templateUrl: './add.component.html',
//   styleUrls: ['./add.component.scss']
// })
// export class AddComponent implements OnInit {
//   newCreditCard: any = {
//     id: 0,
//     name: "",
//     maxCredit: 0,
//     interestRate: 0,
//     active: false,
//     reccomendedScore: '',
//     termsAndCondition: '',
//     createDate: '',
//     updateDate: "",
//     description: '',
//     bankname: ''
//   };

//   arrayLength: number = 0;

//   constructor(private creditcardsService: CreditcardsService, private router: Router) { }

//   ngOnInit(): void {
//     this.getCreditCardsLength();
//   }

//   getCreditCardsLength(): void {
//     this.creditcardsService.getCreditCardsLength().subscribe((length: number) => {
//       this.arrayLength = length;
//       console.log('Array Length:', this.arrayLength);
//       this.newCreditCard.id = this.arrayLength + 1;
//       console.log('New Credit Card ID:', this.newCreditCard.id);
      
//     });
//   }

//   saveCreditCard(): void {
//     console.log("The user added a new credit card");
//     this.creditcardsService.createCreditCards(this.newCreditCard).subscribe(data => {
//       alert("The new card is added");
//       this.router.navigate(['creditcards']);
//     });
//   }
// }






