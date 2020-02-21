import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CaseTableComponent } from "./case-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("CaseTableComponent", () => {
  let component: CaseTableComponent;
  let fixture: ComponentFixture<CaseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaseTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
