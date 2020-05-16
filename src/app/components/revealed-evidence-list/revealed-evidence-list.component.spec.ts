import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RevealedEvidenceListComponent } from "./revealed-evidence-list.component";

describe("RevealedEvidenceListComponent", () => {
  let component: RevealedEvidenceListComponent;
  let fixture: ComponentFixture<RevealedEvidenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevealedEvidenceListComponent ],
      imports: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevealedEvidenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
