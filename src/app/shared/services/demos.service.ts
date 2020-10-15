import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { APP_ROUTES } from '../constants/app-routes.const';
import { AppRouteModel } from '../models/app-route.model';

@Injectable({
  providedIn: 'root'
})
export class DemosService {
  private demoRoutes: AppRouteModel[];
  private data$: Observable<any>;

  constructor(private http: HttpClient) { }

  public get routes(): AppRouteModel[] {
    if (!this.demoRoutes) {
      this.initializeRoutes();
    }

    return this.demoRoutes;
  }

  public getImage(): Observable<any> {
    if (!this.data$) {
      this.data$ = this.http.get('https://dog.ceo/api/breeds/image/random')
        .pipe(
          shareReplay({ bufferSize: 1, refCount: false })
        );
    }

    return this.data$;
  }

  private initializeRoutes(): void {
    const main = APP_ROUTES.DEMOS.MAIN;
    const children = APP_ROUTES.DEMOS.CHILDREN.SAMPLE;

    this.demoRoutes = Object.values(children).map((route) => {
      return {
        path: `/${main}/${route}`,
        label: route.replace(/-/g, ' ')
      };
    });
  }
}
