import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JudgeComponent } from "./judge.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";
import { RevelationsComponent } from "../revelations/revelations.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { LoadingComponent } from "../loading/loading.component";
import { CardComponent } from "../card/card.component";
import { AccordionAreaComponent } from "../accordion-area/accordion-area.component";
import { AccordionTriggerComponent } from "../accordion-trigger/accordion-trigger.component";

describe("JudgeComponent", () => {
  let component: JudgeComponent;
  let fixture: ComponentFixture<JudgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JudgeComponent, RevelationsComponent, HeaderComponent,
        BodyComponent, LoadingComponent, CardComponent,
        AccordionAreaComponent, AccordionTriggerComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
