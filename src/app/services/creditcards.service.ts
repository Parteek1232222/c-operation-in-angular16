import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs'; /*the observable is not the part of particular angular thaat why we import from rxjs*/
// import { Observable } from 'rxjs/internal/Observable';
import { CreditCard } from '../models/credit-card';




@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {
  [x: string]: any;

  private apiUrl="http://localhost:3000/creditcards";
  constructor( private httpClient:HttpClient) { }


  createCreditCards(creditCard:CreditCard):Observable<CreditCard>{
    return this.httpClient.post<CreditCard>(this.apiUrl,creditCard);
  }
  getCreditCard():Observable<CreditCard[]>{
    return this.httpClient.get<CreditCard[]>(this.apiUrl);
  }
  getCreditCardById(id:string):Observable<CreditCard>{
    const url=`${this.apiUrl}/${id}`;
    return this.httpClient.get<CreditCard>(url);
  }
  updateCreditCard(creditCard:CreditCard):Observable<CreditCard>{
    const url=`${this.apiUrl}/${creditCard.id}`;
   return this.httpClient.put<CreditCard>(url,creditCard);
  }

  getCreditCardsLength(): Observable<number> {
    return this['httpClient'].get<any[]>(this.apiUrl).pipe(
      map((creditCards: string | any[]) => creditCards.length)
    )
  }


  deleteCreditCard(id:string):Observable<CreditCard>{
    const url=`${this.apiUrl}/${id}`;
    return this.httpClient.delete<CreditCard>(url);

  }
}
/*
 command to generate the service in a particular folder as:-
 fisrtly i enter into credicards foldre
 ng g s services( as in sub folder-name)/creditcards(service-name)
 i import the httpclient here make it private to it
 import the creditcard model which is used as interface 
 use of observable that inject from rxjs

 i make it here function with its functionality
*/
