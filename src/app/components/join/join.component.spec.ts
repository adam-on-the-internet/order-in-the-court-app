import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {JoinComponent} from "./join.component";
import {CaseHeaderComponent} from "../case-header/case-header.component";
import {FormsModule} from "@angular/forms";
import {CastComponent} from "../cast/cast.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("JoinComponent", () => {
  let component: JoinComponent;
  let fixture: ComponentFixture<JoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JoinComponent, CaseHeaderComponent, CastComponent,
      ],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule, SimpleComponentsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
