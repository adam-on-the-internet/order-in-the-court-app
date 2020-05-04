import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RulesComponent } from "./rules.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { CardComponent } from "../card/card.component";
import { AccordionAreaComponent } from "../accordion-area/accordion-area.component";
import { AccordionTriggerComponent } from "../accordion-trigger/accordion-trigger.component";

describe("RulesComponent", () => {
  let component: RulesComponent;
  let fixture: ComponentFixture<RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RulesComponent, HeaderComponent, BodyComponent, CardComponent,
        AccordionAreaComponent, AccordionTriggerComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
