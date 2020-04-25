import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WitnessComponent } from "./witness.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { RevelationsComponent } from "../revelations/revelations.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { LoadingComponent } from "../loading/loading.component";
import { CardComponent } from "../card/card.component";
import { CaseUnstartedComponent } from "../case-unstarted/case-unstarted.component";

describe("WitnessComponent", () => {
  let component: WitnessComponent;
  let fixture: ComponentFixture<WitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WitnessComponent, RevelationsComponent,
        HeaderComponent, BodyComponent, LoadingComponent,
        CardComponent, CaseUnstartedComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
