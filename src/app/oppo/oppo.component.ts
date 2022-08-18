import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
@Component({
  selector: 'app-oppo',
  templateUrl: './oppo.component.html',
  styleUrls: ['./oppo.component.css']
})
export class OppoComponent implements OnInit {

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

