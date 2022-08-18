import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
@Component({
  selector: 'app-huwaei',
  templateUrl: './huwaei.component.html',
  styleUrls: ['./huwaei.component.css']
})
export class HuwaeiComponent implements OnInit {

  constructor(private _MobileService:MobileService) { 
    this.getProduct();
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
