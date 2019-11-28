import { Component, OnInit } from '@angular/core';
import { BidScreenComponent } from '../bid-screen/bid-screen.component';

@Component({
  selector: 'app-bid-history',
  templateUrl: './bid-history.component.html',
  styleUrls: ['./bid-history.component.css']
})
export class BidHistoryComponent implements OnInit {

  bidsNumber = this.bidNum.bids;
  constructor(private bidNum: BidScreenComponent) { }

  ngOnInit() {
  }
}
