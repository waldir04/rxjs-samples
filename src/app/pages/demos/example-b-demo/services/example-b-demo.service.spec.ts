import { TestBed } from '@angular/core/testing';

import { ExampleBDemoService } from './example-b-demo.service';

describe('ExampleBDemoService', () => {
  let service: ExampleBDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleBDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
