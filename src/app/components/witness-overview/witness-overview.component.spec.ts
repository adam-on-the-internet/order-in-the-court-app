import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WitnessOverviewComponent } from "./witness-overview.component";

describe("WitnessOverviewComponent", () => {
  let component: WitnessOverviewComponent;
  let fixture: ComponentFixture<WitnessOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitnessOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
