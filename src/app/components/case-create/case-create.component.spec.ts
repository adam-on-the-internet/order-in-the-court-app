import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CaseCreateComponent} from "./case-create.component";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("CaseCreateComponent", () => {
  let component: CaseCreateComponent;
  let fixture: ComponentFixture<CaseCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CaseCreateComponent, CardComponent, BodyComponent, AccordionTriggerComponent, AccordionAreaComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
