import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestContentComponent } from './suggest-content.component';

describe('SuggestContentComponent', () => {
  let component: SuggestContentComponent;
  let fixture: ComponentFixture<SuggestContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
