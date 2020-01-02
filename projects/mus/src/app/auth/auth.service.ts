import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  handId: number = null;
  redirectUrl: string;

  constructor(
    private http: HttpClient
  ) { }

  login(name: string, password: string): Observable<number> {
    return this.http.post<number>(`${environment.API_URL}/login`, {name, password})
      .pipe(tap(handId => this.handId = handId));
  }

  logout(): void {
    this.handId = null;
  }
}
