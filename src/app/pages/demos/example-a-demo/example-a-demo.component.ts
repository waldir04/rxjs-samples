import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, filter, finalize, map, mergeMap, toArray } from 'rxjs/operators';
import { ExampleADemoService } from './services/example-a-demo.service';

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  adult?: boolean;
}

@Component({
  selector: 'app-example-a-demo',
  templateUrl: './example-a-demo.component.html',
  styleUrls: ['./example-a-demo.component.scss']
})
export class ExampleADemoComponent {
  public loading: boolean;
  public users: User[];

  constructor(private service: ExampleADemoService) {
    this.users = [];
  }

  public start(): void {
    this.loading = true;

    this.getUsers()
      .pipe(finalize(() => this.loading = false))
      .subscribe((users) => this.users = users);
  }

  private getUsers(): Observable<User[]> {
    return this.service.getUsers()
      .pipe(
        mergeMap((users) => users),
        filter((user) => user.age > 18),
        mergeMap((user) => {
          return this.service.getUserEmail(user.id)
            .pipe(
              map((data) => {
                return { ...user, email: data.email };
              })
            );
        }),
        toArray()
      );
  }

}
