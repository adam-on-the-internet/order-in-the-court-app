import { TestBed } from '@angular/core/testing';

import { CaseNameService } from './case-name.service';

describe('CaseNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseNameService = TestBed.get(CaseNameService);
    expect(service).toBeTruthy();
  });
});
