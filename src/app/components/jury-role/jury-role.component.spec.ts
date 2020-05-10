import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryRoleComponent } from './jury-role.component';

describe('JuryRoleComponent', () => {
  let component: JuryRoleComponent;
  let fixture: ComponentFixture<JuryRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuryRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuryRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
