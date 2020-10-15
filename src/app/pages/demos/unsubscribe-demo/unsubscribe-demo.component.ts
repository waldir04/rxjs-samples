import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubscribe-demo',
  templateUrl: './unsubscribe-demo.component.html',
  styleUrls: ['./unsubscribe-demo.component.scss']
})
export class UnsubscribeDemoComponent implements OnDestroy {
  public logs: string[];

  private subscription: Subscription;

  constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient) {
    this.logs = [];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public start(): void {
    this.subscription = fromEvent(this.document, 'click')
    .subscribe((event: MouseEvent) => {
      const message = `Click on: ${event.clientX} - ${event.clientY}`;

      this.logs.push(message);
      console.log(message);
    });

    this.http.get('https://dog.ceo/api/breeds/image/random')
    .subscribe((response) => console.log(response));
  }

}
