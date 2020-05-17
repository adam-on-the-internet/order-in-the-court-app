import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {EvidenceTableComponent} from "./evidence-table.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {LoadingComponent} from "../loading/loading.component";
import {CardComponent} from "../card/card.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";

describe("EvidenceTableComponent", () => {
  let component: EvidenceTableComponent;
  let fixture: ComponentFixture<EvidenceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EvidenceTableComponent, LoadingComponent, CardComponent,
        AccordionTriggerComponent, AccordionAreaComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
