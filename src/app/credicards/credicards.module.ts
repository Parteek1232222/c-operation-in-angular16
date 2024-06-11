import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredicardsRoutingModule } from './credicards-routing.module';
import { CredicardsComponent } from './credicards.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';



import {MatCardModule} from '@angular/material/card';/*this is used for mat cards:-angulrmaterial*/

import {MatTableModule} from '@angular/material/table';/*this is used for mattable :-angulrmaterial*/

import {MatPaginatorModule} from '@angular/material/paginator';/*this is used for pagination :-angulrmaterial*/
   
import {MatCheckboxModule} from '@angular/material/checkbox';/*this is used for checkbox :-angulrmaterial*/

import {MatIconModule} from '@angular/material/icon';/*this is used for icon :-angulrmaterial*/
import { FormsModule } from '@angular/forms'; /*this is for ngForm */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    CredicardsComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
    SearchComponent,

    
  ],
  imports: [
    CommonModule,
    CredicardsRoutingModule,
    MatCardModule,/*this is used for ,sidebar :-angulrmaterial*/
    MatTableModule,/*this is used for ,table:-angulrmaterial*/
    MatPaginatorModule,/*this is used for ,sidebar :-angulrmaterial*/
    MatCheckboxModule,/*this is used for ,checkbox:-angulrmaterial*/
    MatIconModule,/*this is used for ,icon:-angulrmaterial*/
    FormsModule,/*this is for the ngForm ,used in add component as tempalte driven form*/
    MatFormFieldModule,/*this is for the angular,used in add component as tempalte driven form*/
    MatInputModule,/*this is for the angular,used in add component as tempalte driven form to take input*/
    
    ToastrModule.forRoot(),
  
    
    
  ]
})
export class CredicardsModule { }
