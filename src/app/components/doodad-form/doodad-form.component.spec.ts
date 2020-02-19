import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DoodadFormComponent } from "./doodad-form.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";

describe("DoodadFormComponent", () => {
  let component: DoodadFormComponent;
  let fixture: ComponentFixture<DoodadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoodadFormComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoodadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
