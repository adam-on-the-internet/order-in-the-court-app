import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IssueBlockComponent } from "./issue-block.component";

describe("IssueBlockComponent", () => {
  let component: IssueBlockComponent;
  let fixture: ComponentFixture<IssueBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
