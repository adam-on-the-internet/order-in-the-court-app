import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WitnessTableComponent } from "./witness-table.component";

describe("WitnessTableComponent", () => {
  let component: WitnessTableComponent;
  let fixture: ComponentFixture<WitnessTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitnessTableComponent ]
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
