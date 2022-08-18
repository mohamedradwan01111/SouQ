import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
MobileService
@Component({
  selector: 'app-sunglap',
  templateUrl: './sunglap.component.html',
  styleUrls: ['./sunglap.component.css']
})
export class SunglapComponent implements OnInit {

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
