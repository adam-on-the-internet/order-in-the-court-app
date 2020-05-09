import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ExtrasComponent} from "./extras.component";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {RouterTestingModule} from "@angular/router/testing";

describe("ExtrasComponent", () => {
  let component: ExtrasComponent;
  let fixture: ComponentFixture<ExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExtrasComponent, CardComponent, BodyComponent, AccordionTriggerComponent, AccordionAreaComponent,
      ],
      imports: [RouterTestingModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
