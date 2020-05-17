import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CaseArchiveComponent} from "./case-archive.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {CaseTableComponent} from "../case-table/case-table.component";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("CaseArchiveComponent", () => {
  let component: CaseArchiveComponent;
  let fixture: ComponentFixture<CaseArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CaseArchiveComponent,
        CaseTableComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, SimpleComponentsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
