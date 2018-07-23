import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  _trailRating: number;
  trailID: string;

  @Input()
  get trailRating() {
    return this._trailRating;
  }

  set trailRating(rating: number) {
      this._trailRating = rating;
      this.ratingArr = [];
      for (let i = 0; i < this.trailRating; i++) {
          this.ratingArr.push(i.toString());
      }
  }

  ratingArr = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.currentTrailID.subscribe(trailID => this.trailID = trailID);
  }
}




