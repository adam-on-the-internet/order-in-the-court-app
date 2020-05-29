import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CaseRecordComponent} from "./case-record.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("CaseRecordComponent", () => {
  let component: CaseRecordComponent;
  let fixture: ComponentFixture<CaseRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaseRecordComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
