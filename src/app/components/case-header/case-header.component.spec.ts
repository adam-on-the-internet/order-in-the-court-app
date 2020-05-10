import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CaseHeaderComponent} from "./case-header.component";
import {BasicModalBoxComponent} from "../basic-modal-box/basic-modal-box.component";
import {CastComponent} from "../cast/cast.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("CaseHeaderComponent", () => {
  let component: CaseHeaderComponent;
  let fixture: ComponentFixture<CaseHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaseHeaderComponent, BasicModalBoxComponent, CastComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
