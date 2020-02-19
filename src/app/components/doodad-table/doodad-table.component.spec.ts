import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DoodadTableComponent } from "./doodad-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("DoodadTableComponent", () => {
  let component: DoodadTableComponent;
  let fixture: ComponentFixture<DoodadTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoodadTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoodadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
