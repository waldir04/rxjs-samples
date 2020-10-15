import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-catch-error-demo',
  templateUrl: './catch-error-demo.component.html',
  styleUrls: ['./catch-error-demo.component.scss']
})
export class CatchErrorDemoComponent {
  public logAsSuccess: string;
  public logAsError: string;

  public start(): void {

    throwError('This is an error!')
      .pipe(catchError(val => of(`I caught: ${val}`)))
      .subscribe(val => this.logAsSuccess = val);

    throwError('This is an error!')
      .pipe(catchError(val => throwError(`I caught: ${val}`)))
      .subscribe(
        () => {},
        (error) => this.logAsError = error
      );
  }

}
