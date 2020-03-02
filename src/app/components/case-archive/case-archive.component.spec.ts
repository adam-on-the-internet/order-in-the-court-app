import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CaseArchiveComponent } from "./case-archive.component";

describe("CaseArchiveComponent", () => {
  let component: CaseArchiveComponent;
  let fixture: ComponentFixture<CaseArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
