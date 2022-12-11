import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasFeriadosComponent } from './lineas-feriados.component';

describe('LineasFeriadosComponent', () => {
  let component: LineasFeriadosComponent;
  let fixture: ComponentFixture<LineasFeriadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineasFeriadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineasFeriadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
