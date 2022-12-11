import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFeriadosComponent } from './tabla-feriados.component';

describe('TablaFeriadosComponent', () => {
  let component: TablaFeriadosComponent;
  let fixture: ComponentFixture<TablaFeriadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaFeriadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaFeriadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
