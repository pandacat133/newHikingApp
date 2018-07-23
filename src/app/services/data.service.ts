import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private zipSource = new BehaviorSubject<string>('90210');
  currentZip = this.zipSource.asObservable();

  private trailID = new BehaviorSubject<string>('7000000');
  currentTrailID = this.trailID.asObservable();

  constructor() { }

  changeZip(zip: string) {
    this.zipSource.next(zip);
  }
}
