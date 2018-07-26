import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Weekendtrip } from './weekendtrip';


@Injectable({
  providedIn: 'root'
})
export class ShowtripsService {
  weekendURL = 'http://localhost:3000/weekEndTrips';
  oneDayURL = 'http://localhost:3000/oneDayTrips';
  constructor(private http: HttpClient) { }
  findWeekEnd(): Observable<Weekendtrip[]> {
    return this.http.get<Weekendtrip[]>(this.weekendURL);

  }
  findOneDay(): Observable<Weekendtrip[]> {
    return this.http.get<Weekendtrip[]>(this.oneDayURL);
  }
}
