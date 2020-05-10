import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitnessRoleComponent } from './witness-role.component';

describe('WitnessRoleComponent', () => {
  let component: WitnessRoleComponent;
  let fixture: ComponentFixture<WitnessRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitnessRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
