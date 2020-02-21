import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserOverviewComponent } from "./user-overview.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { UserTableComponent } from "../user-table/user-table.component";

describe("UserOverviewComponent", () => {
  let component: UserOverviewComponent;
  let fixture: ComponentFixture<UserOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserOverviewComponent, UserTableComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});