import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { interval, Observable, Subject } from 'rxjs';
import { shareReplay, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-share-replay-options-demo',
  templateUrl: './share-replay-options-demo.component.html',
  styleUrls: ['./share-replay-options-demo.component.scss']
})
export class ShareReplayOptionsDemoComponent implements OnInit {
  public source$: Observable<any>;
  public subject$: Subject<any>;
  public logs: string[];
  public form: FormGroup;

  constructor() {
    this.logs = [];
    this.subject$ = new Subject();
  }

  public ngOnInit(): void {
    this.form = new FormGroup({
      refCount: new FormControl(true),
      bufferSize: new FormControl('1'),
    });
  }

  public start(): void {
    const refCount = this.form.get('refCount').value;
    const bufferSize = +this.form.get('bufferSize').value;

    this.logs = [];

    if (bufferSize === 1) {
      this.startRefcount(refCount, bufferSize);
    } else {
      this.startBufferSize(refCount, bufferSize);
    }
  }

  public startRefcount(refCount: boolean, bufferSize: number): void {

    this.source$ = interval(1000)
      .pipe(
        shareReplay({ bufferSize, refCount }),
        takeUntil(this.subject$)
      );

    const sub1 = this.source$.subscribe(x => this.logs.push(`Subscriber 1 with value: ${x}`));
    const sub2 = this.source$.subscribe(x => this.logs.push(`Subscriber 2 with value: ${x}`));

    setTimeout(() => {
      sub1.unsubscribe();
      sub2.unsubscribe();
    }, 2000);

    setTimeout(() => {
      this.source$.subscribe(x => this.logs.push(`Subscriber 3 with value: ${x}`));
    }, 4000);

    setTimeout(() => {
      this.subject$.next();
    }, 8000);
  }

  public startBufferSize(refCount: boolean, bufferSize: number): void {
    const source$ = interval(1000)
    .pipe(
      take(5),
      shareReplay({ bufferSize, refCount })
    );

    source$.subscribe(x => this.logs.push(`Subscriber 1 with value: ${x}`));

    setTimeout(() => {
      source$.subscribe(x => this.logs.push(`Subscriber 2 with value: ${x}`));
    }, 8000);
  }


  public tableRowClass(value: string): string {
    switch (true) {
      case value.startsWith('Subscriber 1'):
        return 'table-success';
      case value.startsWith('Subscriber 2'):
        return 'table-primary';
      default:
        return 'table-danger';
    }
  }

}
