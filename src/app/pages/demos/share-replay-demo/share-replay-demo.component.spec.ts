import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReplayDemoComponent } from './share-replay-demo.component';

describe('ShareReplayDemoComponent', () => {
  let component: ShareReplayDemoComponent;
  let fixture: ComponentFixture<ShareReplayDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareReplayDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareReplayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
