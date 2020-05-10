import {TestBed} from "@angular/core/testing";

import {CaseEvidenceService} from "./case-evidence.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("CaseEvidenceService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: CaseEvidenceService = TestBed.get(CaseEvidenceService);
    expect(service).toBeTruthy();
  });
});
