import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {PlaintiffRoleComponent} from "./plaintiff-role.component";
import {CaseHeaderComponent} from "../case-header/case-header.component";
import {CastComponent} from "../cast/cast.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {RevealedEvidenceListComponent} from "../revealed-evidence-list/revealed-evidence-list.component";
import {RevealedEvidenceComponent} from "../revealed-evidence/revealed-evidence.component";
import {WaitingComponent} from "../waiting/waiting.component";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";
import {CaseRecordComponent} from "../case-record/case-record.component";
import {EvidenceOperationsComponent} from "../evidence-operations/evidence-operations.component";

describe("PlaintiffRoleComponent", () => {
  let component: PlaintiffRoleComponent;
  let fixture: ComponentFixture<PlaintiffRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlaintiffRoleComponent, CaseHeaderComponent, CastComponent, RevealedEvidenceListComponent,
        RevealedEvidenceComponent,
        WaitingComponent, CaseRecordComponent, EvidenceOperationsComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, SimpleComponentsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaintiffRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
