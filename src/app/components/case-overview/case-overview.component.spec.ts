import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CaseOverviewComponent } from "./case-overview.component";
import { CaseTableComponent } from "../case-table/case-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ClosedCaseTableComponent } from '../closed-case-table/closed-case-table.component';

describe("CaseOverviewComponent", () => {
  let component: CaseOverviewComponent;
  let fixture: ComponentFixture<CaseOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaseOverviewComponent, CaseTableComponent, ClosedCaseTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
