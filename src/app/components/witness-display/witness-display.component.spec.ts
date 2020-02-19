import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WitnessDisplayComponent } from "./witness-display.component";

describe("WitnessDisplayComponent", () => {
  let component: WitnessDisplayComponent;
  let fixture: ComponentFixture<WitnessDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitnessDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
