import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OpenCaseTableComponent } from "./open-case-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { LoadingComponent } from "../loading/loading.component";

describe("OpenCaseTableComponent", () => {
  let component: OpenCaseTableComponent;
  let fixture: ComponentFixture<OpenCaseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenCaseTableComponent, LoadingComponent],
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
