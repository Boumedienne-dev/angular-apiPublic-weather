import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrl: String = 'https://api.openweathermap.org/data/2.5';
  apiKey: String = 'ddcff25903b9a2738cb6286aadca63fb';

  constructor(private http: HttpClient) { }

  getWeather(cityName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/weather?appid=${this.apiKey}&q=${cityName}`);
  }

  //getWeather('Lyon)
  //https://api.openweathermap.org/data/2.5/weather?appid=ddcff25903b9a2738cb6286aadca63fb&q=lyon
}
