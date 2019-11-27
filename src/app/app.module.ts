import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BidScreenComponent } from './auction-house/bid-screen/bid-screen.component';
import { BidHistoryComponent } from './auction-house/bid-history/bid-history.component';
import { StatisticsComponent } from './auction-house/statistics/statistics.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AuctionHouseComponent } from './auction-house/auction-house.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BidScreenComponent,
    BidHistoryComponent,
    StatisticsComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AuctionHouseComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
