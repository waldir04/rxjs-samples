import { Component, OnInit } from '@angular/core';
import { interval, of, zip } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-zip-demo',
  templateUrl: './zip-demo.component.html',
  styleUrls: ['./zip-demo.component.scss']
})
export class ZipDemoComponent {
  public logs: string[];
  public emiting: boolean;

  constructor() {
    this.logs = [];
  }

  public start(): void {
    this.logs = [];
    this.emitLogs();
  }

  private emitLogs(): void {
    // [2000, 1000, 5000, 3000, 1500]
    zip(
      of(2000).pipe(delay(2000)),
      of(1000).pipe(delay(1000)),
      of(5000).pipe(delay(5000)),
      of(3000).pipe(delay(3000)),
      of(1500).pipe(delay(1500))
    )
    .subscribe((val) => this.logs = this.mapLogs(val));
  }

  private mapLogs(logs: number[]): string[] {
    return logs.map((log) => `Delayed by: ${log}ms`);
  }

}
