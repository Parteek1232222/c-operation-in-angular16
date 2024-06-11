import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AddComponent } from './add/add.component';
import { CredicardsComponent } from './credicards.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
     path: '', component: CredicardsComponent ,
  },/*this is module level component used as a base card routing*/
  {
    path:'add',component:AddComponent
  },
  
  {
    path:'view/:id',component:ViewComponent
  },
  {
    path:'edit/:id',component:EditComponent
  },
  {
    path:'delete/:id',component: DeleteComponent 
   },
   
  {
    path:'**',component:PageNotFoundComponent 
  } /*this is app level component used as a wild card*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredicardsRoutingModule { }
