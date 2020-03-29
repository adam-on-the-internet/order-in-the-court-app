import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CaseSelectComponent } from "./case-select.component";
import { OpenCaseTableComponent } from "../open-case-table/open-case-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { LoadingComponent } from "../loading/loading.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";

describe("CaseSelectComponent", () => {
  let component: CaseSelectComponent;
  let fixture: ComponentFixture<CaseSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CaseSelectComponent, OpenCaseTableComponent, LoadingComponent,
        HeaderComponent, BodyComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
