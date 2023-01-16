import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAllComponent } from './sales-all.component';

describe('SalesAllComponent', () => {
  let component: SalesAllComponent;
  let fixture: ComponentFixture<SalesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
