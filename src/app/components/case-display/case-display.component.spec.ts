import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CaseDisplayComponent} from "./case-display.component";
import {RouterTestingModule} from "@angular/router/testing";
import {BodyComponent} from "../body/body.component";
import {HeaderComponent} from "../header/header.component";
import {LoadingComponent} from "../loading/loading.component";
import {CardComponent} from "../card/card.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";

describe("CaseDisplayComponent", () => {
  let component: CaseDisplayComponent;
  let fixture: ComponentFixture<CaseDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CaseDisplayComponent, BodyComponent, HeaderComponent, LoadingComponent,
        CardComponent, AccordionTriggerComponent, AccordionAreaComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
