import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ModalBoxAdvancedComponent } from "./modal-box-advanced.component";

describe("ModalBoxAdvancedComponent", () => {
  let component: ModalBoxAdvancedComponent;
  let fixture: ComponentFixture<ModalBoxAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBoxAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBoxAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
