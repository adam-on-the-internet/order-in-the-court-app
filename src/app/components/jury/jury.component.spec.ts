import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JuryComponent } from "./jury.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IssueBlockComponent } from "../issue-block/issue-block.component";

describe("JuryComponent", () => {
  let component: JuryComponent;
  let fixture: ComponentFixture<JuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JuryComponent, IssueBlockComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
