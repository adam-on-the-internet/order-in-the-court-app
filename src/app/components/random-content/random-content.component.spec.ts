import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {RandomContentComponent} from "./random-content.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule} from "@angular/forms";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("RandomContentComponent", () => {
  let component: RandomContentComponent;
  let fixture: ComponentFixture<RandomContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RandomContentComponent,
      ],
      imports: [HttpClientTestingModule, FormsModule, SimpleComponentsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
