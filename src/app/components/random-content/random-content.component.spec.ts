import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomContentComponent } from './random-content.component';

describe('RandomContentComponent', () => {
  let component: RandomContentComponent;
  let fixture: ComponentFixture<RandomContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
