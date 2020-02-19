import { TestBed } from "@angular/core/testing";

import { IssueService } from "./issue.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("IssueService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: IssueService = TestBed.get(IssueService);
    expect(service).toBeTruthy();
  });
});
