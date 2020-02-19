import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetTableComponent } from "./widget-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("WidgetTableComponent", () => {
  let component: WidgetTableComponent;
  let fixture: ComponentFixture<WidgetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
