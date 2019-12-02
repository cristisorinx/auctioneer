import { Component, OnInit, ViewChild, Input, Injectable, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ManageDataService } from 'src/app/shared/manage-data.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-bid-screen',
  templateUrl: './bid-screen.component.html',
  styleUrls: ['./bid-screen.component.css']
})
export class BidScreenComponent implements OnInit {

  //Component attributes-----------------------------------------
  @ViewChild('amount',{static: false}) bidValue: NgModel;
  
  private bids = 0;
  public currentOffer = Math.round(Math.random() * 1000);
  private playerTotalBids = 0;
  private computerTotalBids = 0;
  private computerTimer;
  private timeout: number;
  disableBidInterface = false;
  time = 30;
  winner = '';

  //Component constructor-------------------------------------------
  constructor(private manageDataService: ManageDataService) { }

  ngOnInit() {
  var display = document.querySelector('#time');  

  this.startTimer(this.time, display);
  this.computerBid();

  setTimeout(() => clearInterval(this.computerTimer) ,(this.time + 1) * 1000);
  setTimeout(() => {
    this.disableBidInterface = true;
    alert("Thank you for participating in this auction. Have a great rest of your day !  The winner of this auction is : " + this.winner); 
  },(this.time + 1) * 1000);
  }

  // Component Functons------------------------------------------------
  private playerBid(){
    let playerBid = parseInt(this.bidValue.value,10);
      if(playerBid > 0){
        this.currentOffer += playerBid;
        this.bids++;
        this.playerTotalBids += playerBid;
        this.winner = 'player';
        this.manageDataService.onAddBidHistory(playerBid,this.currentOffer,"Player", this.bids);
        this.manageDataService.onUpdateStatistics(playerBid,"Player",this.playerTotalBids);
      }

    // console.log("player offer: " + this.bidValue.value + " bids: " + this.bids + " totalBid: " + this.playerTotalBids);
  }

  private computerBid(){
    var time = Math.floor((Math.random() * (10 - 5 + 1)) +5 ) * 1000;
    console.log("First computer bidding in :" + time + " miliseconds (" + time/1000 + "s)");
    
    this.computerTimer = setInterval(()=>{
      var computerOffer = Math.floor((Math.random() * (2.1 - 0)) * 10) + 0;
      
      
        if(this.timeout < 0){
          console.log("return computerTimer in if " + this.computerTimer);
          clearInterval(this.computerTimer);
        }

        if(computerOffer > 0){
          this.bids++;
          this.currentOffer += computerOffer;
          this.computerTotalBids += computerOffer;
          this.winner = 'computer';
          this.manageDataService.onAddBidHistory(computerOffer,this.currentOffer,"Computer",this.bids);
          this.manageDataService.onUpdateStatistics(computerOffer,"Computer",this.computerTotalBids);  
        }
        time = Math.floor((Math.random() * (10 - 5 + 1)) +5 ) * 1000;
        console.log("Next computer bidding in :" + time + " miliseconds (" + time/1000 + "s)");
        //console.log("computer offer: " + computerOffer + " bids: " + this.bids + " totalBid: " + this.computerTotalBids);
    },time);
  }
  
  private startTimer(duration, display) {
    var timeout = duration;
    var minutes, seconds;
    var timeleft = setInterval(function () {
    
      minutes = Math.floor( parseInt(timeout,10) / 60);
      seconds = parseInt(timeout,10) % 60;

      minutes = minutes < 10 && minutes > 0 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + "m " + seconds + "s";
      timeout--;

      if (timeout < 0) {
        clearInterval(timeleft);
      }
    }, 1000);
    
  }

  stopBidding(){
    //alert("Time for bidding has expired! Thank you for you patience and bids.");
    console.log("stopBidding Function");
    
    clearInterval(this.computerTimer);
  }
}
