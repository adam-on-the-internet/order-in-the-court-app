import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaytestComponent } from './playtest.component';

describe('PlaytestComponent', () => {
  let component: PlaytestComponent;
  let fixture: ComponentFixture<PlaytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaytestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
