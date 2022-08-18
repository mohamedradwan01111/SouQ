import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private _HttpClient:HttpClient) {

   }
   getProduct():Observable<any>
   {
   return this._HttpClient.get(`https://dummyjson.com/products`)
   }
}
