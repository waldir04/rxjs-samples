import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBDemoComponent } from './example-b-demo.component';

describe('ExampleBDemoComponent', () => {
  let component: ExampleBDemoComponent;
  let fixture: ComponentFixture<ExampleBDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleBDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
