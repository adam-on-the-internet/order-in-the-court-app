import { TestBed } from "@angular/core/testing";

import { NavHelperService } from "./nav-helper.service";
import { RouterTestingModule } from "@angular/router/testing";

describe("NavHelperService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
  }));

  it("should be created", () => {
    const service: NavHelperService = TestBed.get(NavHelperService);
    expect(service).toBeTruthy();
  });
});
