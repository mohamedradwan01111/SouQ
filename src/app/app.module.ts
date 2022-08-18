import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { PerfumeComponent } from './perfume/perfume.component';
import { EmployeesComponent } from './employees/employees.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { IphoneComponent } from './iphone/iphone.component';
import { SamsungComponent } from './samsung/samsung.component';
import { OppoComponent } from './oppo/oppo.component';
import { HuwaeiComponent } from './huwaei/huwaei.component';
import { AppleComponent } from './apple/apple.component';
import { SunglapComponent } from './sunglap/sunglap.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { InfenixComponent } from './infenix/infenix.component';
import { Model1Component } from './model1/model1.component';
import { Model2Component } from './model2/model2.component';
import { Model3Component } from './model3/model3.component';
import { Model4Component } from './model4/model4.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileComponent,
    LaptopComponent,
    PerfumeComponent,
    EmployeesComponent,
    NavbarComponent,
    FooterComponent,
    IphoneComponent,
    SamsungComponent,
    OppoComponent,
    HuwaeiComponent,
    AppleComponent,
    SunglapComponent,
    MicrosoftComponent,
    InfenixComponent,
    Model1Component,
    Model2Component,
    Model3Component,
    Model4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
