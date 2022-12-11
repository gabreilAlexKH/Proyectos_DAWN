import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesDiaComponent } from './paises-dia.component';

describe('PaisesDiaComponent', () => {
  let component: PaisesDiaComponent;
  let fixture: ComponentFixture<PaisesDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesDiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
