import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EvidenceDisplayComponent } from "./evidence-display.component";

describe("EvidenceDisplayComponent", () => {
  let component: EvidenceDisplayComponent;
  let fixture: ComponentFixture<EvidenceDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvidenceDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
