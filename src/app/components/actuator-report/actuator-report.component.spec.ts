import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ActuatorReportComponent} from "./actuator-report.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("ActuatorReportComponent", () => {
  let component: ActuatorReportComponent;
  let fixture: ComponentFixture<ActuatorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActuatorReportComponent],
      imports: [HttpClientTestingModule, SimpleComponentsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuatorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
