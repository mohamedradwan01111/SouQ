import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
MobileService
@Component({
  selector: 'app-model1',
  templateUrl: './model1.component.html',
  styleUrls: ['./model1.component.css']
})
export class Model1Component implements OnInit {

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
