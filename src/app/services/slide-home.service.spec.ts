import { TestBed } from '@angular/core/testing';

import { SlideHomeService } from './slide-home.service';

describe('SlideHomeService', () => {
  let service: SlideHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
