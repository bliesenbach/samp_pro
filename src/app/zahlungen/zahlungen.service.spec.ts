import { TestBed, inject } from '@angular/core/testing';

import { ZahlungenService } from './zahlungen.service';

describe('ZahlungenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZahlungenService]
    });
  });

  it('should be created', inject([ZahlungenService], (service: ZahlungenService) => {
    expect(service).toBeTruthy();
  }));
});
