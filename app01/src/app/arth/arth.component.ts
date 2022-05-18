import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arth',
  templateUrl: './arth.component.html',
  styleUrls: ['./arth.component.css']
})
export class ArthComponent implements OnInit {

  firstNumber : number;
  secondNumber : number;

  constructor() { 
    this.firstNumber = 0;
    this.secondNumber = 0;
  }

  ngOnInit(): void {
  }

}
