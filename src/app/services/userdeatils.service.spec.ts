import { TestBed } from '@angular/core/testing';

import { UserdeatilsService } from './userdeatils.service';

describe('UserdeatilsService', () => {
  let service: UserdeatilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdeatilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
