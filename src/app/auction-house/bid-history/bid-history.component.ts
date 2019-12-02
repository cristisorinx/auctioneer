import { Component, OnInit, Input } from '@angular/core';
import { ManageDataService } from 'src/app/shared/manage-data.service';

@Component({
  selector: 'app-bid-history',
  templateUrl: './bid-history.component.html',
  styleUrls: ['./bid-history.component.css']
})
export class BidHistoryComponent implements OnInit {

  bidsNumber;
  bidHistory;
  
  constructor(private bidHistoryService: ManageDataService) { }

  ngOnInit() {
    this.bidHistory = [];
    this.bidsNumber = 0;
    
    this.bidHistoryService.currentHistory.subscribe(respData => {
      this.bidHistory.unshift(respData);
      this.bidsNumber = respData.numberOfBids;
    });
  }
  
}
