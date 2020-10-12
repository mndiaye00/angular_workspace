import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    redirectUrl: string;

    login(username: string, password: string): Observable<boolean> {
        let isLoggedIn = (username === 'foo' && password === 'bar');

        return of(true).pipe(
            delay(1000),
            tap(val => this.isLoggedIn = isLoggedIn)
        );
    }

    logout(): void {
        this.isLoggedIn = this.isLoggedIn;
    }
}