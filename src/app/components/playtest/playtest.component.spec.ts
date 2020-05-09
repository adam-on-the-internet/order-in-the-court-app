import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {PlaytestComponent} from "./playtest.component";
import {FormsModule} from "@angular/forms";
import {CardComponent} from "../card/card.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {BodyComponent} from "../body/body.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("PlaytestComponent", () => {
  let component: PlaytestComponent;
  let fixture: ComponentFixture<PlaytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlaytestComponent, CardComponent, AccordionAreaComponent, AccordionTriggerComponent,
        BodyComponent,
      ],
      imports: [FormsModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
