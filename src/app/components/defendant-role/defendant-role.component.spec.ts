import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {DefendantRoleComponent} from "./defendant-role.component";
import {CaseHeaderComponent} from "../case-header/case-header.component";
import {CardComponent} from "../card/card.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {BodyComponent} from "../body/body.component";
import {BasicModalBoxComponent} from "../basic-modal-box/basic-modal-box.component";
import {CastComponent} from "../cast/cast.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {RevealedEvidenceComponent} from "../../component/revealed-evidence/revealed-evidence.component";
import {RevealedEvidenceListComponent} from "../../component/revealed-evidence-list/revealed-evidence-list.component";

describe("DefendantRoleComponent", () => {
  let component: DefendantRoleComponent;
  let fixture: ComponentFixture<DefendantRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DefendantRoleComponent, CaseHeaderComponent, CardComponent, AccordionAreaComponent, AccordionTriggerComponent,
        BodyComponent, BasicModalBoxComponent, CastComponent, RevealedEvidenceComponent, RevealedEvidenceListComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
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
