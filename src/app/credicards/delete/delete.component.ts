import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  creditCardId: string | undefined | null;
  toaster=inject(ToastrService);

  constructor(private creditcardsService:CreditcardsService, 
    private router:ActivatedRoute,private route:Router)   
    {
       this.creditCardId = this.router.snapshot.paramMap.get("id");
       console.log('data',this.creditCardId)
      if( this.creditCardId )
        {
           this.creditcardsService.deleteCreditCard(this.creditCardId).subscribe(data=>{
            console.log("the particualr creditcard deled");
            // alert("the certain card deleted");
            this.toaster.success("deleted");
            this.route.navigate(['creditcards']);
    
            })
        } 
        

 }

}



 /*this is the one approach to deleted the certain
  creditcard  with firstly go on delete componenet.html then furthwer goes back to the 
  creditcard where all the creditcards are shown */

  







  