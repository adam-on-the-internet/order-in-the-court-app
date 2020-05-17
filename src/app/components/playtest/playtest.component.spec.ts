import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {PlaytestComponent} from "./playtest.component";
import {FormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("PlaytestComponent", () => {
  let component: PlaytestComponent;
  let fixture: ComponentFixture<PlaytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlaytestComponent,
      ],
      imports: [FormsModule, HttpClientTestingModule, SimpleComponentsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
