import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

@Injectable()
export class ExampleBDemoService {

  constructor(private http: HttpClient) { }

  public searchCountries(query: string): Observable<string[]> {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${query}/?fields=name`)
      .pipe(
        mergeMap((countries) => countries as any[]),
        map((country) => country.name),
        toArray()
      );
  }
}
