import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeDemoComponent } from './unsubscribe-demo.component';

describe('UnsubscribeDemoComponent', () => {
  let component: UnsubscribeDemoComponent;
  let fixture: ComponentFixture<UnsubscribeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubscribeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
