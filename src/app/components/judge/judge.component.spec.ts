import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JudgeComponent } from "./judge.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IssueBlockComponent } from "../issue-block/issue-block.component";
import { FormsModule } from "@angular/forms";
import { RevelationsComponent } from "../revelations/revelations.component";

describe("JudgeComponent", () => {
  let component: JudgeComponent;
  let fixture: ComponentFixture<JudgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JudgeComponent, IssueBlockComponent, RevelationsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
