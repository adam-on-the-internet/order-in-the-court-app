import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CaseCreateComponent} from "./case-create.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";
import {FormsModule} from "@angular/forms";

describe("CaseCreateComponent", () => {
  let component: CaseCreateComponent;
  let fixture: ComponentFixture<CaseCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CaseCreateComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, SimpleComponentsModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
