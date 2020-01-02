import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/mus/src/environments/environment';
import { Observable } from 'rxjs';
import { Hand } from './hand.model';

@Injectable({
  providedIn: 'root'
})
export class HandService {

  constructor(
    private http: HttpClient
  ) { }

  getHand(id: number): Observable<Hand> {
    return this.http.get<Hand>(environment.API_URL);
  }
}
