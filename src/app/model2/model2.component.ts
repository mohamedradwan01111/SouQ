import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
@Component({
  selector: 'app-model2',
  templateUrl: './model2.component.html',
  styleUrls: ['./model2.component.css']
})
export class Model2Component implements OnInit {

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
