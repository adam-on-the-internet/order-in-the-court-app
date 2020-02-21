import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlaintiffComponent } from "./plaintiff.component";

describe("PlaintiffComponent", () => {
  let component: PlaintiffComponent;
  let fixture: ComponentFixture<PlaintiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaintiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaintiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
