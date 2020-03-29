import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WitnessTableComponent } from "./witness-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { LoadingComponent } from "../loading/loading.component";

describe("WitnessTableComponent", () => {
  let component: WitnessTableComponent;
  let fixture: ComponentFixture<WitnessTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WitnessTableComponent, LoadingComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
