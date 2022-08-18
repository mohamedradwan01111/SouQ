import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
@Component({
  selector: 'app-model4',
  templateUrl: './model4.component.html',
  styleUrls: ['./model4.component.css']
})
export class Model4Component implements OnInit {

  constructor(private _MobileService:MobileService) { 
    this.getProduct()
  }
  TrendingMobile:any[]=[];
  ngOnInit(): void {
  }
  getProduct(){
    this._MobileService.getProduct().subscribe((response)=>{
      this.TrendingMobile=response.products
    })
  }
}
