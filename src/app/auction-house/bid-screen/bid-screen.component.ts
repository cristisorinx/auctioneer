import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-bid-screen',
  templateUrl: './bid-screen.component.html',
  styleUrls: ['./bid-screen.component.css']
})
export class BidScreenComponent implements OnInit {

  price = Math.round(Math.random() * 1000);
  time: Number = 60;
  bids = 0;

  @ViewChild('amount',{static: false}) bidValue: NgModel;

  constructor() { }

  ngOnInit() {
  }

  bid(){
    this.price = this.price + parseInt(this.bidValue.value,10);
    this.bids++;
    console.log("value :" + this.bidValue.value + " bids:" + this.bids);
  }

}
