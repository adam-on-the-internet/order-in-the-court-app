import { TestBed } from "@angular/core/testing";

import { ContraptionService } from "./contraption.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ContraptionService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: ContraptionService = TestBed.get(ContraptionService);
    expect(service).toBeTruthy();
  });
});
