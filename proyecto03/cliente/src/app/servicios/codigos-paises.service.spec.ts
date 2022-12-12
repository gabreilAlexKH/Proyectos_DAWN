import { TestBed } from '@angular/core/testing';

import { CodigosPaisesService } from './codigos-paises.service';

describe('CodigosPaisesService', () => {
  let service: CodigosPaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodigosPaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
