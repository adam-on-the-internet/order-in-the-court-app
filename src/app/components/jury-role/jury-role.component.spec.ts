import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {JuryRoleComponent} from "./jury-role.component";
import {CaseHeaderComponent} from "../case-header/case-header.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CastComponent} from "../cast/cast.component";
import {RevealedEvidenceComponent} from "../../component/revealed-evidence/revealed-evidence.component";
import {RevealedEvidenceListComponent} from "../../component/revealed-evidence-list/revealed-evidence-list.component";
import {BodyComponent} from "../body/body.component";
import {CardComponent} from "../card/card.component";
import {BasicModalBoxComponent} from "../basic-modal-box/basic-modal-box.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";

describe("JuryRoleComponent", () => {
  let component: JuryRoleComponent;
  let fixture: ComponentFixture<JuryRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JuryRoleComponent, CaseHeaderComponent, CastComponent,
        RevealedEvidenceComponent, RevealedEvidenceListComponent,
        BodyComponent, BasicModalBoxComponent, AccordionTriggerComponent, AccordionAreaComponent,
        CardComponent,
      ],
      imports: [RouterTestingModule, HttpClientTestingModule, ]
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
