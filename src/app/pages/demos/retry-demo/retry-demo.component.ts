import { Component, OnInit } from '@angular/core';
import { interval, of, throwError } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';

@Component({
  selector: 'app-retry-demo',
  templateUrl: './retry-demo.component.html',
  styleUrls: ['./retry-demo.component.scss']
})
export class RetryDemoComponent {
  public logs: string[];

  constructor() {
    this.logs = [];
  }

  public start(): void {
    interval(1000)
      .pipe(
        mergeMap(val => {
          if (val > 1) {
            return throwError('Error!');
          }

          return of(val);
        }),
        retry(2)
      )
      .subscribe({
        next: val => this.logs.push(`Success response with value: ${val}`),
        error: val => this.logs.push(`${val}: Retried 2 times then quit!`)
      });
  }

  public tableRowClass(value: string): string {
    if (value.startsWith('Success')) {
      return 'table-success';
    }

    return 'table-danger';
  }
}
