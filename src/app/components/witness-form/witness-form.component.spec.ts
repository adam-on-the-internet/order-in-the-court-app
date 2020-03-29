import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WitnessFormComponent } from "./witness-form.component";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { LoadingComponent } from "../loading/loading.component";

describe("WitnessFormComponent", () => {
  let component: WitnessFormComponent;
  let fixture: ComponentFixture<WitnessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WitnessFormComponent, HeaderComponent, BodyComponent, LoadingComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
