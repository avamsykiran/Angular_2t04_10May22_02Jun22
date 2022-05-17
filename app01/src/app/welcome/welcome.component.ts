import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userName: string;
  logo:string;
  logos:string[];
  logoIndex:number;
  imgWidth:number;

  constructor() {
    this.userName = "Somebody";
    this.logos=[
      "assets/imgs/w1.jpg",
      "assets/imgs/w2.jpg",
      "assets/imgs/w3.png",
      "assets/imgs/w4.jpg"
    ];
    this.logoIndex=0;
    this.logo=this.logos[this.logoIndex];
    this.imgWidth=250;
  }

  toggleImage(){
    this.logoIndex++;
    this.logoIndex%=this.logos.length;
    this.logo=this.logos[this.logoIndex];
  }
}
