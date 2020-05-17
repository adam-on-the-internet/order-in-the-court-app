import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {InfoComponent} from "./info.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("InfoComponent", () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InfoComponent,
      ],
      imports: [HttpClientTestingModule, SimpleComponentsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
