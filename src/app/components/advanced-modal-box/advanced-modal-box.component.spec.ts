import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedModalBoxComponent } from './advanced-modal-box.component';

describe('AdvancedModalBoxComponent', () => {
  let component: AdvancedModalBoxComponent;
  let fixture: ComponentFixture<AdvancedModalBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedModalBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedModalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
