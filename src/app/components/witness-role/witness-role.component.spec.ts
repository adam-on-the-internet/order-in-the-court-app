import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {WitnessRoleComponent} from "./witness-role.component";
import {CaseHeaderComponent} from "../case-header/case-header.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {CastComponent} from "../cast/cast.component";
import {RevealedEvidenceComponent} from "../revealed-evidence/revealed-evidence.component";
import {RevealedEvidenceListComponent} from "../revealed-evidence-list/revealed-evidence-list.component";
import {CardComponent} from "../card/card.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {BodyComponent} from "../body/body.component";
import {BasicModalBoxComponent} from "../basic-modal-box/basic-modal-box.component";
import {WaitingComponent} from "../waiting/waiting.component";

describe("WitnessRoleComponent", () => {
  let component: WitnessRoleComponent;
  let fixture: ComponentFixture<WitnessRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WitnessRoleComponent, CaseHeaderComponent, CastComponent,
        RevealedEvidenceComponent, RevealedEvidenceListComponent,
        BodyComponent, BasicModalBoxComponent,
        CardComponent, AccordionAreaComponent, AccordionTriggerComponent,
        WaitingComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
