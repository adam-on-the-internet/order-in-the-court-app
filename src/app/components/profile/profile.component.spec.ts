import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ProfileComponent} from "./profile.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HeaderComponent} from "../header/header.component";
import {BodyComponent} from "../body/body.component";
import {CardComponent} from "../card/card.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {RouterTestingModule} from "@angular/router/testing";
import {LoadingComponent} from "../loading/loading.component";

describe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent, HeaderComponent, BodyComponent,
        CardComponent, AccordionAreaComponent, AccordionTriggerComponent,
        LoadingComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
