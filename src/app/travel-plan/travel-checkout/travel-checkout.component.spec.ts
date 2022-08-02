import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCheckoutComponent } from './travel-checkout.component';

describe('TravelCheckoutComponent', () => {
  let component: TravelCheckoutComponent;
  let fixture: ComponentFixture<TravelCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
