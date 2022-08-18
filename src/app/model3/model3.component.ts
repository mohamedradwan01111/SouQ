import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
@Component({
  selector: 'app-model3',
  templateUrl: './model3.component.html',
  styleUrls: ['./model3.component.css']
})
export class Model3Component implements OnInit {

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
