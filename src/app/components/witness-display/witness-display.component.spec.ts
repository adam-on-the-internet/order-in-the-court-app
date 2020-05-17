import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {WitnessDisplayComponent} from "./witness-display.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {BodyComponent} from "../body/body.component";
import {HeaderComponent} from "../header/header.component";
import {LoadingComponent} from "../loading/loading.component";
import {CardComponent} from "../card/card.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";

describe("WitnessDisplayComponent", () => {
  let component: WitnessDisplayComponent;
  let fixture: ComponentFixture<WitnessDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WitnessDisplayComponent, BodyComponent, HeaderComponent, LoadingComponent,
        CardComponent, AccordionAreaComponent, AccordionTriggerComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
