import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContraptionFormComponent } from "./contraption-form.component";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ContraptionFormComponent", () => {
  let component: ContraptionFormComponent;
  let fixture: ComponentFixture<ContraptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContraptionFormComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
