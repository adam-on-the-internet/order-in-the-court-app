import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {NavbarComponent} from "./navbar.component";
import {RouterTestingModule} from "@angular/router/testing";
import {BasicModalBoxComponent} from "../basic-modal-box/basic-modal-box.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent, BasicModalBoxComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
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
