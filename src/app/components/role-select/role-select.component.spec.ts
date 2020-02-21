import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RoleSelectComponent } from "./role-select.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("RoleSelectComponent", () => {
  let component: RoleSelectComponent;
  let fixture: ComponentFixture<RoleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoleSelectComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
