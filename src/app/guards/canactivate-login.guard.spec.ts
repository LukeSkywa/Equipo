import { TestBed } from '@angular/core/testing';

import { CanactivateLoginGuard } from './canactivate-login.guard';

describe('CanactivateLoginGuard', () => {
  let guard: CanactivateLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanactivateLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
