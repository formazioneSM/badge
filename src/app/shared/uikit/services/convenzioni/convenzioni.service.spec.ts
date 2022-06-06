import { TestBed } from '@angular/core/testing';

import { ConvenzioniService } from './convenzioni.service';

describe('ConvenzioniService', () => {
  let service: ConvenzioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvenzioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
