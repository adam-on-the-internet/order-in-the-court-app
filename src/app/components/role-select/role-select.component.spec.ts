import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RoleSelectComponent } from "./role-select.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RevelationsComponent } from "../revelations/revelations.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { LoadingComponent } from "../loading/loading.component";
import { CardComponent } from "../card/card.component";

describe("RoleSelectComponent", () => {
  let component: RoleSelectComponent;
  let fixture: ComponentFixture<RoleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RoleSelectComponent, RevelationsComponent,
        HeaderComponent, BodyComponent, LoadingComponent,
        CardComponent
      ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
