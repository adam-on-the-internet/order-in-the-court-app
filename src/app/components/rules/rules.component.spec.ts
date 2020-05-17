import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {RulesComponent} from "./rules.component";
import {RulesDisplayComponent} from "../rules-display/rules-display.component";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("RulesComponent", () => {
  let component: RulesComponent;
  let fixture: ComponentFixture<RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RulesComponent, RulesDisplayComponent,
      ],
      imports: [SimpleComponentsModule]
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
