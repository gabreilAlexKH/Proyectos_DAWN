import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeriadosPaisComponent } from './feriados-pais.component';

describe('FeriadosPaisComponent', () => {
  let component: FeriadosPaisComponent;
  let fixture: ComponentFixture<FeriadosPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeriadosPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeriadosPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
