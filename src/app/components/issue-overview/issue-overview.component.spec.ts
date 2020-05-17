import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {IssueOverviewComponent} from "./issue-overview.component";
import {IssueTableComponent} from "../issue-table/issue-table.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {HeaderComponent} from "../header/header.component";
import {BodyComponent} from "../body/body.component";
import {LoadingComponent} from "../loading/loading.component";
import {CardComponent} from "../card/card.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";

describe("IssueOverviewComponent", () => {
  let component: IssueOverviewComponent;
  let fixture: ComponentFixture<IssueOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IssueOverviewComponent, IssueTableComponent,
        HeaderComponent, BodyComponent, LoadingComponent,
        CardComponent, AccordionTriggerComponent, AccordionAreaComponent,
      ],
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
