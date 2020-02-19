import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DoodadDisplayComponent } from "./doodad-display.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("DoodadDisplayComponent", () => {
  let component: DoodadDisplayComponent;
  let fixture: ComponentFixture<DoodadDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoodadDisplayComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoodadDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
