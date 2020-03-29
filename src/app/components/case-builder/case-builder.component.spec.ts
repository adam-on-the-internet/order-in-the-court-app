import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CaseBuilderComponent } from "./case-builder.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { LoadingComponent } from "../loading/loading.component";

describe("CaseBuilderComponent", () => {
  let component: CaseBuilderComponent;
  let fixture: ComponentFixture<CaseBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaseBuilderComponent, HeaderComponent, BodyComponent, LoadingComponent],
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
