import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-share-replay-demo',
  templateUrl: './share-replay-demo.component.html',
  styleUrls: ['./share-replay-demo.component.scss']
})
export class ShareReplayDemoComponent {
  public images: { message; status; }[];
  public data$: Observable<any>;

  public source;

  constructor(private http: HttpClient) {
    this.images = [];
  }

  public start(): void {
    this.getImage()
      .subscribe((response) => this.images.push(response));
  }

  private getImage(): Observable<any> {
    if (!this.data$) {
      this.data$ = this.http.get('https://dog.ceo/api/breeds/image/random')
        .pipe(
          shareReplay({ bufferSize: 1, refCount: true })
        );
    }

    return this.data$;
  }
}
