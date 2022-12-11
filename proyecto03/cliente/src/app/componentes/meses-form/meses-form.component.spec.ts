import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesesFormComponent } from './meses-form.component';

describe('MesesFormComponent', () => {
  let component: MesesFormComponent;
  let fixture: ComponentFixture<MesesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
