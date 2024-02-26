import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WeatherApiResponse } from '../types';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.error.message));
  }

  getData(city :string) {
    return this.http.get<WeatherApiResponse>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dc3a9b86228c3f87abac3d3efebc7f5d`)
    .pipe(catchError(this.handleError))
  }
}
