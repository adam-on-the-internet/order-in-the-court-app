import {TestBed} from "@angular/core/testing";

import {ContactService} from "./contact.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("ContactService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: ContactService = TestBed.get(ContactService);
    expect(service).toBeTruthy();
  });
});
