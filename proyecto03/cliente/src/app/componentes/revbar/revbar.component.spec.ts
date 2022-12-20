import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevbarComponent } from './revbar.component';

describe('RevbarComponent', () => {
  let component: RevbarComponent;
  let fixture: ComponentFixture<RevbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
