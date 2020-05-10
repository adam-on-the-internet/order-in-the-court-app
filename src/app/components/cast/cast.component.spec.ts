import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CastComponent} from "./cast.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("CastComponent", () => {
  let component: CastComponent;
  let fixture: ComponentFixture<CastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CastComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
