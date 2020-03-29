import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RulesComponent } from "./rules.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";

describe("RulesComponent", () => {
  let component: RulesComponent;
  let fixture: ComponentFixture<RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RulesComponent, HeaderComponent, BodyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
