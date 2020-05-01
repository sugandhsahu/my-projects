import { TestBed } from '@angular/core/testing';

import { FabDropdownService } from './fab-dropdown.service';

describe('FabDropdownService', () => {
  let service: FabDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FabDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
