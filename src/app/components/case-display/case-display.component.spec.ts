import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CaseDisplayComponent } from "./case-display.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("CaseDisplayComponent", () => {
  let component: CaseDisplayComponent;
  let fixture: ComponentFixture<CaseDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaseDisplayComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
