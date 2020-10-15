import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleADemoComponent } from './example-a-demo.component';

describe('ExampleADemoComponent', () => {
  let component: ExampleADemoComponent;
  let fixture: ComponentFixture<ExampleADemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleADemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleADemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
