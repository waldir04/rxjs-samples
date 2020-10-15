import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryDemoComponent } from './retry-demo.component';

describe('RetryDemoComponent', () => {
  let component: RetryDemoComponent;
  let fixture: ComponentFixture<RetryDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetryDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
