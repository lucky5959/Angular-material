import { TestBed } from '@angular/core/testing';

import { SrvUserService } from './srv-user.service';

describe('SrvUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrvUserService = TestBed.get(SrvUserService);
    expect(service).toBeTruthy();
  });
});
