import { TestBed, inject } from '@angular/core/testing';

import { ListingsService } from './listings.service';

describe('ListingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListingsService]
    });
  });

  it('should be created', inject([ListingsService], (service: ListingsService) => {
    expect(service).toBeTruthy();
  }));
});
