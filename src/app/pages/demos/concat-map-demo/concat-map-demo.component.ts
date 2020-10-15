import { Component } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map-demo',
  templateUrl: './concat-map-demo.component.html',
  styleUrls: ['./concat-map-demo.component.scss']
})
export class ConcatMapDemoComponent {
  public logs: string[];
  public emiting: boolean;

  public start(): void {
    this.logs = [];
    this.emitLogs();
  }

  private emitLogs(): void {
    of(2000, 1000, 5000, 3000, 1500)
      .pipe(
        concatMap(val => {
          return of(`Delayed by: ${val}ms`).pipe(delay(val));
        })
      )
      .subscribe(val => this.logs.push(val));
  }
}
