import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuctionHouseComponent } from './auction-house/auction-house.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'auctionHouse', component: AuctionHouseComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
