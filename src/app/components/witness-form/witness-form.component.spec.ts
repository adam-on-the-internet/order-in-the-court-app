import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {WitnessFormComponent} from "./witness-form.component";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("WitnessFormComponent", () => {
  let component: WitnessFormComponent;
  let fixture: ComponentFixture<WitnessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WitnessFormComponent,
      ],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, SimpleComponentsModule]
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
