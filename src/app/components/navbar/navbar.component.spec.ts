import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {NavbarComponent} from "./navbar.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RulesDisplayComponent} from "../rules-display/rules-display.component";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent, RulesDisplayComponent,
      ],
      imports: [RouterTestingModule, HttpClientTestingModule, SimpleComponentsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
