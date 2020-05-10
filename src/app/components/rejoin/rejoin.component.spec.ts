import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoinComponent } from './rejoin.component';

describe('RejoinComponent', () => {
  let component: RejoinComponent;
  let fixture: ComponentFixture<RejoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
