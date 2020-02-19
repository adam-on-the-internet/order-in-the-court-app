import { TestBed } from "@angular/core/testing";

import { WidgetService } from "./widget.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("WidgetService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: WidgetService = TestBed.get(WidgetService);
    expect(service).toBeTruthy();
  });
});
