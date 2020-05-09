import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {RandomContentComponent} from "./random-content.component";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";
import {AccordionTriggerComponent} from "../accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "../accordion-area/accordion-area.component";
import {BasicModalBoxComponent} from "../basic-modal-box/basic-modal-box.component";
import {LoadingComponent} from "../loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AdvancedModalBoxComponent} from "../advanced-modal-box/advanced-modal-box.component";

describe("RandomContentComponent", () => {
  let component: RandomContentComponent;
  let fixture: ComponentFixture<RandomContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RandomContentComponent, CardComponent, BodyComponent, AccordionTriggerComponent,
        AccordionAreaComponent, BasicModalBoxComponent, LoadingComponent, AdvancedModalBoxComponent,
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
