import { TestBed } from '@angular/core/testing';

import { DevMobilityLibService } from './dev-mobility-lib.service';

describe('DevMobilityLibService', () => {
  let service: DevMobilityLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevMobilityLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
