import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map-demo',
  templateUrl: './merge-map-demo.component.html',
  styleUrls: ['./merge-map-demo.component.scss']
})
export class MergeMapDemoComponent {
  public logs: string[];
  public emiting: boolean;

  public start(): void {
    this.logs = [];
    this.emitLogs();
  }

  private emitLogs(): void {
    of(2000, 1000, 5000, 3000, 1500)
      .pipe(
        mergeMap(val => {
          return of(`Delayed by: ${val}ms`).pipe(delay(val));
        })
      )
      .subscribe(val => this.logs.push(val));
  }
}
