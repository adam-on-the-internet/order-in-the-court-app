import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAreaComponent } from './accordion-area.component';

describe('AccordionAreaComponent', () => {
  let component: AccordionAreaComponent;
  let fixture: ComponentFixture<AccordionAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
