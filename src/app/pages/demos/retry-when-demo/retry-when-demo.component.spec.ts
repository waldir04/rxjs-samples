import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryWhenDemoComponent } from './retry-when-demo.component';

describe('RetryWhenDemoComponent', () => {
  let component: RetryWhenDemoComponent;
  let fixture: ComponentFixture<RetryWhenDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetryWhenDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryWhenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
