import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CourtroomComponent} from "./courtroom.component";
import {CardComponent} from "../card/card.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {BodyComponent} from "../body/body.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("CourtroomComponent", () => {
  let component: CourtroomComponent;
  let fixture: ComponentFixture<CourtroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourtroomComponent, CardComponent, AccordionTriggerComponent, AccordionAreaComponent,
        BodyComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
