import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ActuatorReportComponent } from "./actuator-report.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LoadingComponent } from "../loading/loading.component";

describe("ActuatorReportComponent", () => {
  let component: ActuatorReportComponent;
  let fixture: ComponentFixture<ActuatorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActuatorReportComponent, LoadingComponent],
      imports: [HttpClientTestingModule]
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
