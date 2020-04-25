import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CaseUnstartedComponent } from "./case-unstarted.component";

describe("CaseUnstartedComponent", () => {
  let component: CaseUnstartedComponent;
  let fixture: ComponentFixture<CaseUnstartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseUnstartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseUnstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
