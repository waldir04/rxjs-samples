import { TestBed } from '@angular/core/testing';

import { ExampleADemoService } from './example-a-demo.service';

describe('ExampleADemoService', () => {
  let service: ExampleADemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleADemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
