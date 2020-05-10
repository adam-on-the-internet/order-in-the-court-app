import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DefendantRoleComponent } from "./defendant-role.component";

describe("DefendantRoleComponent", () => {
  let component: DefendantRoleComponent;
  let fixture: ComponentFixture<DefendantRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefendantRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefendantRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
