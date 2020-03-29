import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlaintiffComponent } from "./plaintiff.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { RevelationsComponent } from "../revelations/revelations.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { LoadingComponent } from "../loading/loading.component";

describe("PlaintiffComponent", () => {
  let component: PlaintiffComponent;
  let fixture: ComponentFixture<PlaintiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlaintiffComponent, RevelationsComponent,
        HeaderComponent, BodyComponent, LoadingComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaintiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
