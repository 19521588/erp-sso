import { TestBed } from '@angular/core/testing';

import { ListingUserService } from './listing-user.service';

describe('ListingUserService', () => {
  let service: ListingUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
