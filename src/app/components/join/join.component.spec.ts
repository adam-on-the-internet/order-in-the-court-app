import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {JoinComponent} from "./join.component";
import {CaseHeaderComponent} from "../case-header/case-header.component";
import {FormsModule} from "@angular/forms";
import {CardComponent} from "../card/card.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {BodyComponent} from "../body/body.component";
import {BasicModalBoxComponent} from "../basic-modal-box/basic-modal-box.component";
import {CastComponent} from "../cast/cast.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("JoinComponent", () => {
  let component: JoinComponent;
  let fixture: ComponentFixture<JoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JoinComponent, CaseHeaderComponent, CardComponent, AccordionAreaComponent, AccordionTriggerComponent,
        BodyComponent, BasicModalBoxComponent, CastComponent,
      ],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
