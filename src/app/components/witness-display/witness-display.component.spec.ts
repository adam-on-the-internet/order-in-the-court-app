import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {WitnessDisplayComponent} from "./witness-display.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("WitnessDisplayComponent", () => {
  let component: WitnessDisplayComponent;
  let fixture: ComponentFixture<WitnessDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WitnessDisplayComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, SimpleComponentsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
