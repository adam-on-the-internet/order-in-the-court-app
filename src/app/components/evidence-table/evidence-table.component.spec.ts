import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EvidenceTableComponent } from "./evidence-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("EvidenceTableComponent", () => {
  let component: EvidenceTableComponent;
  let fixture: ComponentFixture<EvidenceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EvidenceTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
