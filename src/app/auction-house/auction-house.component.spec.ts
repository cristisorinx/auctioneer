import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionHouseComponent } from './auction-house.component';

describe('AuctionHouseComponent', () => {
  let component: AuctionHouseComponent;
  let fixture: ComponentFixture<AuctionHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
