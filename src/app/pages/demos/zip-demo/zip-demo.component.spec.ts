import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipDemoComponent } from './zip-demo.component';

describe('ZipDemoComponent', () => {
  let component: ZipDemoComponent;
  let fixture: ComponentFixture<ZipDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
