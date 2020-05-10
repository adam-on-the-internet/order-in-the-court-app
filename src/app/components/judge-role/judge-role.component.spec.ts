import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {JudgeRoleComponent} from "./judge-role.component";
import {CaseHeaderComponent} from "../case-header/case-header.component";
import {CastComponent} from "../cast/cast.component";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";
import {BasicModalBoxComponent} from "../basic-modal-box/basic-modal-box.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {RevealedEvidenceComponent} from "../../component/revealed-evidence/revealed-evidence.component";
import {RevealedEvidenceListComponent} from "../../component/revealed-evidence-list/revealed-evidence-list.component";

describe("JudgeRoleComponent", () => {
  let component: JudgeRoleComponent;
  let fixture: ComponentFixture<JudgeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JudgeRoleComponent, CaseHeaderComponent, CastComponent, CardComponent, BodyComponent,
        BasicModalBoxComponent, AccordionTriggerComponent, AccordionAreaComponent,
        RevealedEvidenceComponent, RevealedEvidenceListComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
