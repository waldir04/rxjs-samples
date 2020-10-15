import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchErrorDemoComponent } from './catch-error-demo.component';

describe('CatchErrorDemoComponent', () => {
  let component: CatchErrorDemoComponent;
  let fixture: ComponentFixture<CatchErrorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchErrorDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchErrorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
