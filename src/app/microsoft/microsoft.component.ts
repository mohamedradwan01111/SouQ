import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
MobileService
@Component({
  selector: 'app-microsoft',
  templateUrl: './microsoft.component.html',
  styleUrls: ['./microsoft.component.css']
})
export class MicrosoftComponent implements OnInit {

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
