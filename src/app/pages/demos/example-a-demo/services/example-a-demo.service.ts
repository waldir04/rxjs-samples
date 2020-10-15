import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ExampleADemoService {

  constructor() { }

  public getUsers(): Observable<{ id; name; age }[]> {
    const users = [
      { id: 1, name: 'Usuario 1', age: 20 },
      { id: 2, name: 'Usuario 2', age: 30 },
      { id: 3, name: 'Usuario 3', age: 15 }
    ];

    return of(users).pipe(delay(1000));
  }

  public getUserEmail(userId: number): Observable<{ userId; email }> {
    const emails = [
      { userId: 1, email: 'usuario1@email.com' },
      { userId: 2, email: 'usuario2@email.com' }
    ];

    const email = emails.find((item) => item.userId === userId );

    return of(email).pipe(delay(2000));
  }
}
