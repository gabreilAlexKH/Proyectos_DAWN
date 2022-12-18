import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparacionPaisesComponent } from './comparacion-paises.component';

describe('ComparacionPaisesComponent', () => {
  let component: ComparacionPaisesComponent;
  let fixture: ComponentFixture<ComparacionPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparacionPaisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparacionPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
