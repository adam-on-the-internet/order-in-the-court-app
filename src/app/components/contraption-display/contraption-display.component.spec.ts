import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContraptionDisplayComponent } from "./contraption-display.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("ContraptionDisplayComponent", () => {
  let component: ContraptionDisplayComponent;
  let fixture: ComponentFixture<ContraptionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContraptionDisplayComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraptionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
