import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WitnessFormComponent } from "./witness-form.component";

describe("WitnessFormComponent", () => {
  let component: WitnessFormComponent;
  let fixture: ComponentFixture<WitnessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitnessFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
