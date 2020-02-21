import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlaintiffComponent } from "./plaintiff.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IssueBlockComponent } from "../issue-block/issue-block.component";

describe("PlaintiffComponent", () => {
  let component: PlaintiffComponent;
  let fixture: ComponentFixture<PlaintiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaintiffComponent, IssueBlockComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaintiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
