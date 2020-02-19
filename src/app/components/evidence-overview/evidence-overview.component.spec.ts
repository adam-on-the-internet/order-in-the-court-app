import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EvidenceOverviewComponent } from "./evidence-overview.component";

describe("EvidenceOverviewComponent", () => {
  let component: EvidenceOverviewComponent;
  let fixture: ComponentFixture<EvidenceOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvidenceOverviewComponent ]
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
