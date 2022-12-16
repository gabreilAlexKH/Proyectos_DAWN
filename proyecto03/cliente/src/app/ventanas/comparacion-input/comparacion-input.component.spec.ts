import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparacionInputComponent } from './comparacion-input.component';

describe('ComparacionInputComponent', () => {
  let component: ComparacionInputComponent;
  let fixture: ComponentFixture<ComparacionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparacionInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparacionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
