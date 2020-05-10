import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CourtroomComponent } from "./courtroom.component";

describe("CourtroomComponent", () => {
  let component: CourtroomComponent;
  let fixture: ComponentFixture<CourtroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
