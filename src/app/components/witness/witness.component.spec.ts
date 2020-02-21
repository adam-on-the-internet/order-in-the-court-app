import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WitnessComponent } from "./witness.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IssueBlockComponent } from "../issue-block/issue-block.component";

describe("WitnessComponent", () => {
  let component: WitnessComponent;
  let fixture: ComponentFixture<WitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WitnessComponent, IssueBlockComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
