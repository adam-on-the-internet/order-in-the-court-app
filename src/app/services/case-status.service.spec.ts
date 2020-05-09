import { TestBed } from '@angular/core/testing';

import { CaseStatusService } from './case-status.service';

describe('CaseStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseStatusService = TestBed.get(CaseStatusService);
    expect(service).toBeTruthy();
  });
});
