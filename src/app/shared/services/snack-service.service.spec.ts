import { TestBed } from '@angular/core/testing';

import { SnackServiceService } from './snack-service.service';

describe('SnackServiceService', () => {
  let service: SnackServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
