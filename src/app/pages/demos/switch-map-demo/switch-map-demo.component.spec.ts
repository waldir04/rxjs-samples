import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapDemoComponent } from './switch-map-demo.component';

describe('SwitchMapDemoComponent', () => {
  let component: SwitchMapDemoComponent;
  let fixture: ComponentFixture<SwitchMapDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchMapDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMapDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
