import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import { RouterTestingModule } from "@angular/router/testing";
import { BodyComponent } from "../body/body.component";
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AccordionAreaComponent } from "../accordion-area/accordion-area.component";
import { AccordionTriggerComponent } from "../accordion-trigger/accordion-trigger.component";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent, BodyComponent, HeaderComponent, CardComponent,
        AccordionAreaComponent, AccordionTriggerComponent,
      ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
