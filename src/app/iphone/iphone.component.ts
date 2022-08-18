import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css']
})
export class IphoneComponent implements OnInit {

  constructor(private _MobileService:MobileService) { 
    this.getProduct();
  }
  TrendingMobile:any[]=[];
  ngOnInit(): void {

  }
  getProduct(){
    this._MobileService.getProduct().subscribe((response)=>{
      console.log(response);
      this.TrendingMobile=response.products;
      console.log(this.TrendingMobile);
    })
  }
}
