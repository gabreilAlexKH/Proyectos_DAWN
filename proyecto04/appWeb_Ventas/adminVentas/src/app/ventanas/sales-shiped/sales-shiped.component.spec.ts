import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesShipedComponent } from './sales-shiped.component';

describe('SalesShipedComponent', () => {
  let component: SalesShipedComponent;
  let fixture: ComponentFixture<SalesShipedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesShipedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesShipedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
