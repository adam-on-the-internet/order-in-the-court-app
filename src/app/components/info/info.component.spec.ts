import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InfoComponent } from "./info.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";

describe("InfoComponent", () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InfoComponent,
        HeaderComponent, BodyComponent,
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
