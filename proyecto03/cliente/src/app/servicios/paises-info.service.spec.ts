import { TestBed } from '@angular/core/testing';

import { PaisesInfoService } from './paises-info.service';

describe('PaisesInfoService', () => {
  let service: PaisesInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisesInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
