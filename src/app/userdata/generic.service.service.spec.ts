import { TestBed } from '@angular/core/testing';

import { Generic.ServiceService } from './generic.service.service';

describe('Generic.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Generic.ServiceService = TestBed.get(Generic.ServiceService);
    expect(service).toBeTruthy();
  });
});
