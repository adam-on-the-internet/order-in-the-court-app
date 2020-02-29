import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CaseSelectComponent } from "./case-select.component";
import { CaseTableComponent } from "../case-table/case-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("CaseSelectComponent", () => {
  let component: CaseSelectComponent;
  let fixture: ComponentFixture<CaseSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaseSelectComponent, CaseTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
