import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSalesComponent } from './tabla-sales.component';

describe('TablaSalesComponent', () => {
  let component: TablaSalesComponent;
  let fixture: ComponentFixture<TablaSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
