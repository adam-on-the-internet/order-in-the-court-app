import { TestBed } from '@angular/core/testing';

import { CaseEvidenceService } from './case-evidence.service';

describe('CaseEvidenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseEvidenceService = TestBed.get(CaseEvidenceService);
    expect(service).toBeTruthy();
  });
});
