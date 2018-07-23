import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import * as weatherKey from '../local-api-keys/weather-api-key';


@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeather(lat: string, lng: string): Observable<any> {
    console.log({lat,lng});
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&APPID=${weatherKey.default}`);
  }
}
