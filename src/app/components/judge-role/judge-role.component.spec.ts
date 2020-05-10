import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {JudgeRoleComponent} from "./judge-role.component";
import {CaseHeaderComponent} from "../case-header/case-header.component";

describe("JudgeRoleComponent", () => {
  let component: JudgeRoleComponent;
  let fixture: ComponentFixture<JudgeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JudgeRoleComponent, CaseHeaderComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
