import { TestBed } from "@angular/core/testing";

import { WitnessService } from "./witness.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("WitnessService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: WitnessService = TestBed.get(WitnessService);
    expect(service).toBeTruthy();
  });
});
