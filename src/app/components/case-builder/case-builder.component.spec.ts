import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CaseBuilderComponent } from "./case-builder.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";

describe("CaseBuilderComponent", () => {
  let component: CaseBuilderComponent;
  let fixture: ComponentFixture<CaseBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaseBuilderComponent],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});