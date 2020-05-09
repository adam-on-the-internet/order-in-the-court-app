import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CreditsComponent} from "./credits.component";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";

describe("CreditsComponent", () => {
  let component: CreditsComponent;
  let fixture: ComponentFixture<CreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreditsComponent, CardComponent, BodyComponent, AccordionAreaComponent, AccordionTriggerComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
