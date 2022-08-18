import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  constructor(private _MobileService:MobileService) {
    this.getProduct();
   }
   TrendingMobile:any[]=[];
  ngOnInit(): void {
  }
  getProduct(){
    this._MobileService.getProduct().subscribe((response)=>{
      this.TrendingMobile=response.products;
    })
}
}
