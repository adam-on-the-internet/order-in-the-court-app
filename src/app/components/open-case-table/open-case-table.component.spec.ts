import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OpenCaseTableComponent } from "./open-case-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("CaseTableComponent", () => {
  let component: OpenCaseTableComponent;
  let fixture: ComponentFixture<OpenCaseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenCaseTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
