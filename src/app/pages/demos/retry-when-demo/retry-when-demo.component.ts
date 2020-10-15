import { Component } from '@angular/core';
import { interval, of, throwError, timer } from 'rxjs';
import { delayWhen, mergeMap, retryWhen, tap } from 'rxjs/operators';

@Component({
  selector: 'app-retry-when-demo',
  templateUrl: './retry-when-demo.component.html',
  styleUrls: ['./retry-when-demo.component.scss']
})
export class RetryWhenDemoComponent {
  public logs: string[];

  constructor() {
    this.logs = [];
  }

  public start(): void {

    interval(1000)
      .pipe(
        mergeMap(val => {
          if (val > 2) {
            return throwError(val);
          }
          return of(val);
        }),
        retryWhen(errors =>
          errors.pipe(
            tap(val => this.logs.push(`Value ${val} was too high!`)),
            delayWhen(val => timer(val * 1000))
          )
        )
      )
      .subscribe(val => this.logs.push(`Success with value: ${val}`));
  }

  public tableRowClass(value: string): string {
    if (value.startsWith('Success')) {
      return 'table-success';
    }

    return 'table-danger';
  }

}
