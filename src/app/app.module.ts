import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar';/*this is used for ,mattools :-angulrmaterial*/

import {MatIconModule} from '@angular/material/icon';/*this is used for ,icon which is used in angularmaterial :-angulrmaterial*/

import {MatSidenavModule} from '@angular/material/sidenav';/*this is used for ,sidebar in :-angulrmaterial*/

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';/*this is used for ,sidebar :-angulrmaterial*/
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import{MatListModule} from '@angular/material/list';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent, 
    PageNotFoundComponent, SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule ,/*this is used for ,mattools :-angulrmaterial*/ 
    MatIconModule,/*this is used for ,icon which is used in angularmaterial :-angulrmaterial*/
    MatSidenavModule,/*this is used for ,sidebar :-angulrmaterial*/
    // HttpClient,/*this is used for ,service calling httpclient module globally*/
    HttpClientModule,/*this is used for ,service calling httpclient module globally*/
    MatListModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
