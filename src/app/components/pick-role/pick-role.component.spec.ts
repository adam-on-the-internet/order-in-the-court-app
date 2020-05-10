import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickRoleComponent } from './pick-role.component';

describe('PickRoleComponent', () => {
  let component: PickRoleComponent;
  let fixture: ComponentFixture<PickRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
