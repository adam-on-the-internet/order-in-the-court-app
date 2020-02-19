import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IssueOverviewComponent } from "./issue-overview.component";
import { IssueTableComponent } from "../issue-table/issue-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("IssueOverviewComponent", () => {
  let component: IssueOverviewComponent;
  let fixture: ComponentFixture<IssueOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssueOverviewComponent, IssueTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
