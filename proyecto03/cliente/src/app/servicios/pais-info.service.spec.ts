import { TestBed } from '@angular/core/testing';

import { PaisInfoService } from './pais-info.service';

import {CodigosPaisesService} from './codigos-paises.service'


describe('PaisInfoService', () => {
  let service: PaisInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
