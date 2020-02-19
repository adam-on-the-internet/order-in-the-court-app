import { TestBed } from "@angular/core/testing";

import { EvidenceService } from "./evidence.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("EvidenceService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: EvidenceService = TestBed.get(EvidenceService);
    expect(service).toBeTruthy();
  });
});
