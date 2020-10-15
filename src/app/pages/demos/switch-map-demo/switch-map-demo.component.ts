import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map-demo',
  templateUrl: './switch-map-demo.component.html',
  styleUrls: ['./switch-map-demo.component.scss']
})
export class SwitchMapDemoComponent {
  public logs: string[];
  public emiting: boolean;

  public start(): void {
    this.logs = [];
    this.emitLogs();
  }

  private emitLogs(): void {
    of(2000, 1000, 5000, 3000, 1500)
      .pipe(
        switchMap(val => {
          return of(`Delayed by: ${val}ms`).pipe(delay(val));
        })
      )
      .subscribe(val => this.logs.push(val));
  }

}
