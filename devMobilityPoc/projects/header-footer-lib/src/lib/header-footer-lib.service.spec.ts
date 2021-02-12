import { TestBed } from '@angular/core/testing';

import { HeaderFooterLibService } from './header-footer-lib.service';

describe('HeaderFooterLibService', () => {
  let service: HeaderFooterLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderFooterLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
