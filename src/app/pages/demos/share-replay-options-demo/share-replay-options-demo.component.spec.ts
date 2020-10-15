import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReplayOptionsDemoComponent } from './share-replay-options-demo.component';

describe('ShareReplayOptionsDemoComponent', () => {
  let component: ShareReplayOptionsDemoComponent;
  let fixture: ComponentFixture<ShareReplayOptionsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareReplayOptionsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareReplayOptionsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
