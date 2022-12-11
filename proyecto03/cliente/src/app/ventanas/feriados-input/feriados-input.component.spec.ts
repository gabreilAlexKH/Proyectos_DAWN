import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeriadosInputComponent } from './feriados-input.component';

describe('FeriadosInputComponent', () => {
  let component: FeriadosInputComponent;
  let fixture: ComponentFixture<FeriadosInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeriadosInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeriadosInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
