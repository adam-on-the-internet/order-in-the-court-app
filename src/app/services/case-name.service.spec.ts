import { TestBed } from "@angular/core/testing";

import { CaseNameService } from "./case-name.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("CaseNameService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: CaseNameService = TestBed.get(CaseNameService);
    expect(service).toBeTruthy();
  });
});
