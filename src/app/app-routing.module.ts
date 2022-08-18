import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { InfenixComponent } from './infenix/infenix.component';
// import { HuwaeiComponent } from './huwaei/huwaei.component';
import { IphoneComponent } from './iphone/iphone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { MobileComponent } from './mobile/mobile.component';
import { Model1Component } from './model1/model1.component';
import { Model2Component } from './model2/model2.component';
import { Model3Component } from './model3/model3.component';
import { Model4Component } from './model4/model4.component';
import { OppoComponent } from './oppo/oppo.component';
import { PerfumeComponent } from './perfume/perfume.component';
import { SamsungComponent } from './samsung/samsung.component';
import { SunglapComponent } from './sunglap/sunglap.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'mobile',component:IphoneComponent},
  {path:'laptop',component:AppleComponent},
  {path:'perfume',component:Model1Component},
  {path:'employess',component:EmployeesComponent},
  {path:'iphone',component:IphoneComponent},
  {path:'samsung',component:SamsungComponent},
  {path:'oppo',component:OppoComponent},
  {path:'apple',component:AppleComponent},
  {path:'sunglap',component:SunglapComponent},
  {path:'microsoft',component:MicrosoftComponent},
  {path:'infenix',component:InfenixComponent},
  {path:'model1',component:Model1Component},
  {path:'model2',component:Model2Component},
  {path:'model3',component:Model3Component},
  {path:'model4',component:Model4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
