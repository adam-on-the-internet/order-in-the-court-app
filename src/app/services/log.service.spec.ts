import { TestBed } from "@angular/core/testing";

import { LogService } from "./log.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("LogService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: LogService = TestBed.get(LogService);
    expect(service).toBeTruthy();
  });
});
