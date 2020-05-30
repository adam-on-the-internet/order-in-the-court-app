import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {EvidenceOperationsComponent} from "./evidence-operations.component";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("EvidenceOperationsComponent", () => {
  let component: EvidenceOperationsComponent;
  let fixture: ComponentFixture<EvidenceOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EvidenceOperationsComponent],
      imports: [SimpleComponentsModule, HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
