import { TestBed } from "@angular/core/testing";

import { DoodadService } from "./doodad.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("DoodadService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: DoodadService = TestBed.get(DoodadService);
    expect(service).toBeTruthy();
  });
});
