import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {RandomContentComponent} from "./random-content.component";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";

describe("RandomContentComponent", () => {
  let component: RandomContentComponent;
  let fixture: ComponentFixture<RandomContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RandomContentComponent, CardComponent, BodyComponent, AccordionTriggerComponent,
        AccordionAreaComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
