import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DoodadOverviewComponent } from "./doodad-overview.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DoodadTableComponent } from "../doodad-table/doodad-table.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("DoodadOverviewComponent", () => {
  let component: DoodadOverviewComponent;
  let fixture: ComponentFixture<DoodadOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoodadOverviewComponent, DoodadOverviewComponent, DoodadTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoodadOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
