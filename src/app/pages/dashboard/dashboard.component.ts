import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  status=0
  number=''
  navs=[
    {name:'مؤهل ',href:'qualif',count:24},
    {name:'التامينات ',href:'tamin',count:24},
    {name:'الحسابات ',href:'calc',count:24},
    {name:'المشاريع ',href:'prog',count:24}
  ]
  orders=[
    {number:'2434#',price:20000,time:6,rebh:5000,status:'1'},
    {number:'2434#',price:20000,time:6,rebh:3500,status:'1'},
    {number:'2434#',price:20000,time:6,rebh:7000,status:'0'},
    {number:'2434#',price:20000,time:6,rebh:1200,status:'1'},
    {number:'2434#',price:20000,time:6,rebh:6500,status:'0'},
    {number:'2434#',price:20000,time:6,rebh:6800,status:'0'},
    {number:'2434#',price:20000,time:6,rebh:6500,status:'1'},
  ]
  filter = {};
  fields:any = {
    number:'',
    status:null
  };

  filterData() {
    for (const key in this.fields) {
      if (Object.prototype.hasOwnProperty.call(this.fields, key)) {
        if(!this.fields[key]){
          delete this.fields[key]
        }
      }
    }
    this.filter = Object.assign({}, this.fields);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
