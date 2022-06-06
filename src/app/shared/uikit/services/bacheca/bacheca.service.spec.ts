import { TestBed } from '@angular/core/testing';

import { BachecaService } from './bacheca.service';

describe('BachecaService', () => {
  let service: BachecaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BachecaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
