import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {SuggestContentComponent} from "./suggest-content.component";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";

describe("SuggestContentComponent", () => {
  let component: SuggestContentComponent;
  let fixture: ComponentFixture<SuggestContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SuggestContentComponent, CardComponent, BodyComponent, AccordionAreaComponent, AccordionTriggerComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
