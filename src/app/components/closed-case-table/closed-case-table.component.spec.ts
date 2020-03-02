import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedCaseTableComponent } from './closed-case-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClosedCaseTableComponent', () => {
  let component: ClosedCaseTableComponent;
  let fixture: ComponentFixture<ClosedCaseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClosedCaseTableComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedCaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
