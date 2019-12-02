import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { BidInfo } from './bidInfo.model';

@Injectable({
    providedIn: 'root'
})

export class ManageDataService {
    
dummy:BidInfo = {bidedAmount: 0, currentOffer: 0, bidder: "", numberOfBids: 0};
private bidHistory = new BehaviorSubject<BidInfo>(this.dummy);
currentHistory = this.bidHistory.asObservable();

private topBidsObs = new BehaviorSubject<Array<{bidder:string, amount: number}>>([]);
currentTop = this.topBidsObs.asObservable();
private topBids: {bidder:string, amount: number}[] = [];

private playerBidsSub = new BehaviorSubject<number>(0);
playerTotalAmountBided = this.playerBidsSub.asObservable();
private computerBidsSub = new BehaviorSubject<number>(0);
computerTotalAmountBided = this.computerBidsSub.asObservable();

onAddBidHistory(bidAmount:number, currentOffer:number, bidder:string, numberOfBids:number){
    this.bidHistory.next({bidedAmount: bidAmount,currentOffer: currentOffer,bidder: bidder,numberOfBids: numberOfBids});
}

onUpdateStatistics(bidAmount:number, bidder:string, totalAmountBidded: number){
    let clone = false;

    if(bidder == 'Player')
        this.playerBidsSub.next(bidAmount);
    else if (bidder == 'Computer')
        this.computerBidsSub.next(bidAmount);
    
        for(let el of this.topBids){
            if(el.bidder == bidder && el.amount == bidAmount)
                clone = true;
        }
        
    if(!clone)
        this.topBids.push({bidder: bidder,amount: bidAmount});
    
    this.topBidsObs.next(this.topBids);
}

}