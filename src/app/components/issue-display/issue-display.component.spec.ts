import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {IssueDisplayComponent} from "./issue-display.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("IssueDisplayComponent", () => {
  let component: IssueDisplayComponent;
  let fixture: ComponentFixture<IssueDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IssueDisplayComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, SimpleComponentsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
