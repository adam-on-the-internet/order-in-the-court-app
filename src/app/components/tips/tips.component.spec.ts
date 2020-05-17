import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {TipsComponent} from "./tips.component";
import {BodyComponent} from "../body/body.component";
import {CardComponent} from "../card/card.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";

describe("TipsComponent", () => {
  let component: TipsComponent;
  let fixture: ComponentFixture<TipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TipsComponent, BodyComponent, CardComponent, AccordionAreaComponent, AccordionTriggerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
