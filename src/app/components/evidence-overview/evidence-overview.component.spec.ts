import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {EvidenceOverviewComponent} from "./evidence-overview.component";
import {EvidenceTableComponent} from "../evidence-table/evidence-table.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("EvidenceOverviewComponent", () => {
  let component: EvidenceOverviewComponent;
  let fixture: ComponentFixture<EvidenceOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EvidenceOverviewComponent, EvidenceTableComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, SimpleComponentsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
