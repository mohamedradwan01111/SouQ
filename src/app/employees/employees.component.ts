import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  users:any[]=[
    {name:'radwan', age:24, gender:'male',salary:6421,dateofBirth:'15/10/1997'},
    {name:'mona', age:34, gender:'fmale',salary:6421,dateofBirth:'15/10/1985'},
    {name:'mohamed', age:30, gender:'male',salary:6421,dateofBirth:'15/10/1992'},
    {name:'ghada', age:26, gender:'fmale',salary:6421,dateofBirth:'15/10/1995'},
    {name:'mostafa', age:44, gender:'male',salary:6421,dateofBirth:'15/10/1977'},
    {name:'saif', age:21, gender:'male',salary:6421,dateofBirth:'15/10/2002'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
