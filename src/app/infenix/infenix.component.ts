import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
MobileService
@Component({
  selector: 'app-infenix',
  templateUrl: './infenix.component.html',
  styleUrls: ['./infenix.component.css']
})
export class InfenixComponent implements OnInit {

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
