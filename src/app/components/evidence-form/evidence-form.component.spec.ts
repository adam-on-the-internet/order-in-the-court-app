import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {EvidenceFormComponent} from "./evidence-form.component";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HeaderComponent} from "../header/header.component";
import {BodyComponent} from "../body/body.component";
import {LoadingComponent} from "../loading/loading.component";
import {CardComponent} from "../card/card.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";

describe("EvidenceFormComponent", () => {
  let component: EvidenceFormComponent;
  let fixture: ComponentFixture<EvidenceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EvidenceFormComponent, HeaderComponent, BodyComponent, LoadingComponent,
        CardComponent, AccordionTriggerComponent, AccordionAreaComponent,
      ],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
