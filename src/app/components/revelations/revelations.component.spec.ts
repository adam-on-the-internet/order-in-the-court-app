import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RevelationsComponent } from "./revelations.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LoadingComponent } from "../loading/loading.component";

describe("RevelationsComponent", () => {
  let component: RevelationsComponent;
  let fixture: ComponentFixture<RevelationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RevelationsComponent, LoadingComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
