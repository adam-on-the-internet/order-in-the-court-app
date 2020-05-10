import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CaseArchiveComponent} from "./case-archive.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {LoadingComponent} from "../loading/loading.component";
import {HeaderComponent} from "../header/header.component";
import {BodyComponent} from "../body/body.component";
import {CaseTableComponent} from "../case-table/case-table.component";

describe("CaseArchiveComponent", () => {
  let component: CaseArchiveComponent;
  let fixture: ComponentFixture<CaseArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CaseArchiveComponent,
        LoadingComponent, HeaderComponent, BodyComponent,
        CaseTableComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
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
