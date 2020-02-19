import { TestBed } from "@angular/core/testing";

import { ActuatorService } from "./actuator.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ActuatorService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: ActuatorService = TestBed.get(ActuatorService);
    expect(service).toBeTruthy();
  });
});
