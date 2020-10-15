import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEvent, Observable, of, Subscription } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, finalize, map, switchMap, tap } from 'rxjs/operators';
import { ExampleBDemoService } from './services/example-b-demo.service';

@Component({
  selector: 'app-example-b-demo',
  templateUrl: './example-b-demo.component.html',
  styleUrls: ['./example-b-demo.component.scss']
})
export class ExampleBDemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('inputSearch') input: ElementRef;

  public countries: string[];
  public form: FormGroup;
  public loading: boolean;
  public hasResults: boolean;

  private subscription: Subscription;

  constructor(private service: ExampleBDemoService) {
    this.countries = [];
    this.hasResults = false;
    this.subscription = new Subscription();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    const subscription = this.inputAutocomplete()
      .subscribe((countries) => this.countries = countries);

    this.subscription.add(subscription);
  }

  private inputAutocomplete(): Observable<string[]> {

    return fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map((e: InputEvent) => (e.target as HTMLInputElement).value),
        filter(query => query.length > 2),
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => this.loading = true ),
        switchMap(query => {
          return this.service.searchCountries(query)
            .pipe(
              catchError((error: HttpErrorResponse) => of([]) ),
              finalize(() => this.loading = false )
            );
        }),
        tap(() => this.hasResults = true )
      );
  }

}
