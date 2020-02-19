import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetOverviewComponent } from "./widget-overview.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { WidgetTableComponent } from "../widget-table/widget-table.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("WidgetOverviewComponent", () => {
  let component: WidgetOverviewComponent;
  let fixture: ComponentFixture<WidgetOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetOverviewComponent, WidgetTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
