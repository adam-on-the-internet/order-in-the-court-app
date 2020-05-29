import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {JuryRoleComponent} from "./jury-role.component";
import {CaseHeaderComponent} from "../case-header/case-header.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CastComponent} from "../cast/cast.component";
import {RevealedEvidenceComponent} from "../revealed-evidence/revealed-evidence.component";
import {RevealedEvidenceListComponent} from "../revealed-evidence-list/revealed-evidence-list.component";
import {WaitingComponent} from "../waiting/waiting.component";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";
import {CaseRecordComponent} from "../case-record/case-record.component";

describe("JuryRoleComponent", () => {
  let component: JuryRoleComponent;
  let fixture: ComponentFixture<JuryRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JuryRoleComponent, CaseHeaderComponent, CastComponent,
        RevealedEvidenceComponent, RevealedEvidenceListComponent, WaitingComponent,
        CaseRecordComponent,
      ],
      imports: [RouterTestingModule, HttpClientTestingModule, SimpleComponentsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuryRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
