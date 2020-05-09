import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BasicModalBoxComponent } from "./basic-modal-box.component";

describe("BasicModalBoxComponent", () => {
  let component: BasicModalBoxComponent;
  let fixture: ComponentFixture<BasicModalBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicModalBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicModalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
