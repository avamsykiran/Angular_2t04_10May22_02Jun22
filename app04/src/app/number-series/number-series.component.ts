import { Component, OnInit } from '@angular/core';
import { NumberSeriesService } from '../number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent implements OnInit {

  lb:number;
  ub:number;
  results!:number[];
  errMsg!:string;
  isJobInProgress:boolean;

  constructor(private nss:NumberSeriesService) {
    this.lb=0;
    this.ub=0;
    this.isJobInProgress=false;
  }

  ngOnInit(): void {
  }

  formSubmitted(){
    this.results=[];
    this.isJobInProgress=true;

    let ob = this.nss.generateSeries(this.lb,this.ub);

    ob.subscribe(
      n => this.results.push(n),
      err => {console.log(err); this.errMsg=err; this.isJobInProgress=false},
      () => this.isJobInProgress=false
    );
  }

}
