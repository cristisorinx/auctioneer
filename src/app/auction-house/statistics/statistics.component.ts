import { Component, OnInit } from '@angular/core';
import { ManageDataService } from 'src/app/shared/manage-data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  topBids: {bidder:string, amount: number}[] = [];
  computerTotalAmountBids: number;
  playerTotalAmountBids: number;
  computerOverBid: number;
  playerOverBid: number;
  computerCurrentBid = 0;
  playerCurrentBid = 0;

  constructor(private manageDataService: ManageDataService) { }

  ngOnInit() {
    this.computerTotalAmountBids = 0;
    this.playerTotalAmountBids = 0;
    this.computerOverBid = 0;
    this.playerOverBid = 0; 

    this.manageDataService.currentTop.subscribe(respData => {
      this.topBids = respData.sort(function(a, b){return b.amount-a.amount});
    });

    this.manageDataService.playerTotalAmountBided.subscribe(respData => {
      this.playerCurrentBid = respData;
      this.playerTotalAmountBids += respData;
      let over = this.playerCurrentBid - this.computerCurrentBid;
      
      if(over > 0)
        this.playerOverBid += over;
    });

    this.manageDataService.computerTotalAmountBided.subscribe(respData => {
      this.computerCurrentBid = respData;
      this.computerTotalAmountBids += respData
      let over = this.computerCurrentBid - this.playerCurrentBid;
      
      if(over > 0)
        this.computerOverBid += over;
    });
  }
}
