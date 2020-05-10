import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {RevealedEvidenceComponent} from "./revealed-evidence.component";
import {RevealedEvidenceListComponent} from "../revealed-evidence-list/revealed-evidence-list.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("RevealedEvidenceComponent", () => {
  let component: RevealedEvidenceComponent;
  let fixture: ComponentFixture<RevealedEvidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RevealedEvidenceComponent, RevealedEvidenceListComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevealedEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
