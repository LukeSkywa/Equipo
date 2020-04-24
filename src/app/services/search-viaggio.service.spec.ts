import { TestBed } from '@angular/core/testing';

import { SearchViaggioService } from './search-viaggio.service';

describe('SearchViaggioService', () => {
  let service: SearchViaggioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchViaggioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
