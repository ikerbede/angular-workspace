import { TestBed } from '@angular/core/testing';

import { HandService } from './hand.service';

describe('HandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandService = TestBed.get(HandService);
    expect(service).toBeTruthy();
  });
});
