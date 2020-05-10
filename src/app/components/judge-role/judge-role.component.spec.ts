import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeRoleComponent } from './judge-role.component';

describe('JudgeRoleComponent', () => {
  let component: JudgeRoleComponent;
  let fixture: ComponentFixture<JudgeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudgeRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
