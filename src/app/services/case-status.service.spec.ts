import { TestBed } from "@angular/core/testing";

import { CaseStatusService } from "./case-status.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("CaseStatusService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: CaseStatusService = TestBed.get(CaseStatusService);
    expect(service).toBeTruthy();
  });
});
