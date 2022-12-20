import { TestBed } from '@angular/core/testing';

import { PaisFeriadosService } from './pais-feriados.service';

describe('PaisFeriadosService', () => {
  let service: PaisFeriadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisFeriadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
