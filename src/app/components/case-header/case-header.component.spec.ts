import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CaseHeaderComponent} from "./case-header.component";
import {CastComponent} from "../cast/cast.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";
import {CaseRecordComponent} from "../case-record/case-record.component";

describe("CaseHeaderComponent", () => {
  let component: CaseHeaderComponent;
  let fixture: ComponentFixture<CaseHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaseHeaderComponent, CastComponent, CaseRecordComponent, ],
      imports: [HttpClientTestingModule, RouterTestingModule, SimpleComponentsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
