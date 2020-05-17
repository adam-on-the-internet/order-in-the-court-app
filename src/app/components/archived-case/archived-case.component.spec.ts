import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ArchivedCaseComponent} from "./archived-case.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {CaseHeaderComponent} from "../case-header/case-header.component";
import {CastComponent} from "../cast/cast.component";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";
import {RevealedEvidenceListComponent} from "../revealed-evidence-list/revealed-evidence-list.component";
import {RevealedEvidenceComponent} from "../revealed-evidence/revealed-evidence.component";

describe("ArchivedCaseComponent", () => {
  let component: ArchivedCaseComponent;
  let fixture: ComponentFixture<ArchivedCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArchivedCaseComponent, CaseHeaderComponent,
        CastComponent, RevealedEvidenceListComponent, RevealedEvidenceComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, SimpleComponentsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
