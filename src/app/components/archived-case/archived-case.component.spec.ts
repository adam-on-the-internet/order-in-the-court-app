import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ArchivedCaseComponent} from "./archived-case.component";
import {HeaderComponent} from "../header/header.component";
import {BodyComponent} from "../body/body.component";
import {LoadingComponent} from "../loading/loading.component";
import {CardComponent} from "../card/card.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {CaseHeaderComponent} from "../case-header/case-header.component";
import {RevealedEvidenceListComponent} from "../revealed-evidence-list/revealed-evidence-list.component";
import {RevealedEvidenceComponent} from "../revealed-evidence/revealed-evidence.component";
import {BasicModalBoxComponent} from "../basic-modal-box/basic-modal-box.component";
import {CastComponent} from "../cast/cast.component";

describe("ArchivedCaseComponent", () => {
  let component: ArchivedCaseComponent;
  let fixture: ComponentFixture<ArchivedCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArchivedCaseComponent, HeaderComponent, BodyComponent, LoadingComponent, CardComponent,
        AccordionTriggerComponent, AccordionAreaComponent, CaseHeaderComponent,
        RevealedEvidenceListComponent, RevealedEvidenceComponent, BasicModalBoxComponent,
        CastComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
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
