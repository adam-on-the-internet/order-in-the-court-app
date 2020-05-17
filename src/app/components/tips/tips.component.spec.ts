import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {TipsComponent} from "./tips.component";
import {SimpleComponentsModule} from "../../simple-components/simple-components.module";

describe("TipsComponent", () => {
  let component: TipsComponent;
  let fixture: ComponentFixture<TipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TipsComponent],
      imports: [SimpleComponentsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
