import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RevelationsComponent } from "./revelations.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LoadingComponent } from "../loading/loading.component";
import { CardComponent } from "../card/card.component";
import { RouterTestingModule } from "@angular/router/testing";
import { AccordionAreaComponent } from "../accordion-area/accordion-area.component";
import { AccordionTriggerComponent } from "../accordion-trigger/accordion-trigger.component";

describe("RevelationsComponent", () => {
  let component: RevelationsComponent;
  let fixture: ComponentFixture<RevelationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RevelationsComponent, LoadingComponent, CardComponent,
        AccordionAreaComponent, AccordionTriggerComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
