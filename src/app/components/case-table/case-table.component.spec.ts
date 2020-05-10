import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CaseTableComponent} from "./case-table.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("CaseTableComponent", () => {
  let component: CaseTableComponent;
  let fixture: ComponentFixture<CaseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaseTableComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
