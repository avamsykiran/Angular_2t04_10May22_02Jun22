import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  str:string;
  n:number;
  d:Date;

  constructor() {
    this.str="some String";
    this.n = Math.PI;
    //this.d = new Date();
    this.d = new Date("1947-08-15");
   }

  ngOnInit(): void {
  }

}
