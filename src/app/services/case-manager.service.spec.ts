import { TestBed } from "@angular/core/testing";

import { CaseManagerService } from "./case-manager.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("CaseManagerService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
  }));

  it("should be created", () => {
    const service: CaseManagerService = TestBed.get(CaseManagerService);
    expect(service).toBeTruthy();
  });
});
