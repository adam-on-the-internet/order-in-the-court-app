import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JuryComponent } from "./jury.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { RevelationsComponent } from "../revelations/revelations.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { LoadingComponent } from "../loading/loading.component";
import { CardComponent } from "../card/card.component";
import { CaseUnstartedComponent } from "../case-unstarted/case-unstarted.component";

describe("JuryComponent", () => {
  let component: JuryComponent;
  let fixture: ComponentFixture<JuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JuryComponent, RevelationsComponent, HeaderComponent, BodyComponent, LoadingComponent,
        CardComponent, CaseUnstartedComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
