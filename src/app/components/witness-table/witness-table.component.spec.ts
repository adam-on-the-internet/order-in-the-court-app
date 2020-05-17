import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {WitnessTableComponent} from "./witness-table.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("WitnessTableComponent", () => {
  let component: WitnessTableComponent;
  let fixture: ComponentFixture<WitnessTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WitnessTableComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, SimpleComponentsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
