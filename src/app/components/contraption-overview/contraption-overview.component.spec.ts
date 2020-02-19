import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContraptionOverviewComponent } from "./contraption-overview.component";
import { ContraptionTableComponent } from "../contraption-table/contraption-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("ContraptionOverviewComponent", () => {
  let component: ContraptionOverviewComponent;
  let fixture: ComponentFixture<ContraptionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContraptionOverviewComponent, ContraptionTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraptionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
