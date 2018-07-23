import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as mapsKey from '../local-api-keys/maps-api-key';

@Injectable()
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation(zip: string): Observable<any> {
    return this.http.get(`http://www.mapquestapi.com/geocoding/v1/address?key=${mapsKey.default}&location=${zip}`)
  }
}
