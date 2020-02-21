import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WitnessComponent } from "./witness.component";

describe("WitnessComponent", () => {
  let component: WitnessComponent;
  let fixture: ComponentFixture<WitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
