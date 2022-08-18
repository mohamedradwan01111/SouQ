import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

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
