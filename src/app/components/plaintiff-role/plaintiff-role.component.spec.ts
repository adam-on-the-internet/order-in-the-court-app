import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {PlaintiffRoleComponent} from "./plaintiff-role.component";
import {CaseHeaderComponent} from "../case-header/case-header.component";
import {CardComponent} from "../card/card.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {BodyComponent} from "../body/body.component";
import {BasicModalBoxComponent} from "../basic-modal-box/basic-modal-box.component";
import {CastComponent} from "../cast/cast.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {RevealedEvidenceListComponent} from "../../component/revealed-evidence-list/revealed-evidence-list.component";
import {RevealedEvidenceComponent} from "../../component/revealed-evidence/revealed-evidence.component";

describe("PlaintiffRoleComponent", () => {
  let component: PlaintiffRoleComponent;
  let fixture: ComponentFixture<PlaintiffRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlaintiffRoleComponent, CaseHeaderComponent, CardComponent, AccordionTriggerComponent, AccordionAreaComponent,
        BodyComponent, BasicModalBoxComponent, CastComponent, RevealedEvidenceListComponent, RevealedEvidenceComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
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
