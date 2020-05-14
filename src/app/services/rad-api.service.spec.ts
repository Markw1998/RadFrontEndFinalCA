import { TestBed } from '@angular/core/testing';

import { RadApiService } from './rad-api.service';

describe('RadApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RadApiService = TestBed.get(RadApiService);
    expect(service).toBeTruthy();
  });
});
