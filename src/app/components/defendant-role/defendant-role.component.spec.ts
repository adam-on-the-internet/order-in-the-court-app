import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {DefendantRoleComponent} from "./defendant-role.component";
import {CaseHeaderComponent} from "../case-header/case-header.component";
import {CastComponent} from "../cast/cast.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {RevealedEvidenceComponent} from "../revealed-evidence/revealed-evidence.component";
import {RevealedEvidenceListComponent} from "../revealed-evidence-list/revealed-evidence-list.component";
import {WaitingComponent} from "../waiting/waiting.component";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";
import {CaseRecordComponent} from "../case-record/case-record.component";

describe("DefendantRoleComponent", () => {
  let component: DefendantRoleComponent;
  let fixture: ComponentFixture<DefendantRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DefendantRoleComponent, CaseHeaderComponent,
        CastComponent, RevealedEvidenceComponent, RevealedEvidenceListComponent,
        WaitingComponent, CaseRecordComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, SimpleComponentsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefendantRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
