import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css']
})
export class SamsungComponent implements OnInit {

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
