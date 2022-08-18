import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
MobileService
@Component({
  selector: 'app-perfume',
  templateUrl: './perfume.component.html',
  styleUrls: ['./perfume.component.css']
})
export class PerfumeComponent implements OnInit {

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
