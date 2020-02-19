import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InfoComponent } from "./info.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActuatorReportComponent } from "../actuator-report/actuator-report.component";

describe("InfoComponent", () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoComponent, ActuatorReportComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
