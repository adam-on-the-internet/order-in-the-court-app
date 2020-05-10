import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaintiffRoleComponent } from './plaintiff-role.component';

describe('PlaintiffRoleComponent', () => {
  let component: PlaintiffRoleComponent;
  let fixture: ComponentFixture<PlaintiffRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaintiffRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaintiffRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
