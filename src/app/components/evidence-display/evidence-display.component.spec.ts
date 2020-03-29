import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EvidenceDisplayComponent } from "./evidence-display.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BodyComponent } from "../body/body.component";
import { HeaderComponent } from "../header/header.component";
import { LoadingComponent } from "../loading/loading.component";

describe("EvidenceDisplayComponent", () => {
  let component: EvidenceDisplayComponent;
  let fixture: ComponentFixture<EvidenceDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EvidenceDisplayComponent, BodyComponent, HeaderComponent, LoadingComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
