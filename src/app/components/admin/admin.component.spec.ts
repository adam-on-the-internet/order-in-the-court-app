import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {AdminComponent} from "./admin.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ActuatorReportComponent} from "../actuator-report/actuator-report.component";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("AdminComponent", () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent, ActuatorReportComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, SimpleComponentsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
