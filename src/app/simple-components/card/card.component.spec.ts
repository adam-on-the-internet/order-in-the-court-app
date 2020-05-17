import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CardComponent} from "./card.component";
import {AccordionTriggerComponent} from "../accordion/accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion/accordion-area/accordion-area.component";

describe("CardComponent", () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, AccordionTriggerComponent, AccordionAreaComponent, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
