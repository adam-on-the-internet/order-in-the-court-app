import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetDisplayComponent } from "./widget-display.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("WidgetDisplayComponent", () => {
  let component: WidgetDisplayComponent;
  let fixture: ComponentFixture<WidgetDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetDisplayComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
