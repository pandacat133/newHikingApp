import { Trails } from './../../domains/trails';
import { Component, OnInit } from '@angular/core';
import { TrailsService } from '../../services/trails.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import { DataService } from '../../services/data.service';
import { MatDialog } from '@angular/material';
import { WriteAReviewComponent } from '../write-a-review/write-a-review.component';

@Component({
  selector: 'trail-details',
  templateUrl: './trail-details.component.html',
  styleUrls: ['./trail-details.component.css']
})
export class TrailDetailsComponent implements OnInit {
  activeTrail: Trails;
  trailWeather: any;
  trailID: string;
  review: string;

  constructor(
    private trailService: TrailsService,
    private route: ActivatedRoute,
    private router: Router,
    private weatherService: WeatherService,
    private data: DataService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.data.currentTrailID.subscribe(trailID => this.trailID = trailID);
    const zip = this.route.snapshot.params['zip'];
    const id = this.route.snapshot.params['id'];
    this.trailService.getTrails(zip).subscribe(result => {
      const trails = result.trails;
      trails.forEach(trail => {
        if (trail.id == id) {
          this.activeTrail = trail;
        }
      });
      if (this.activeTrail) {
        this.weatherService.getWeather(this.activeTrail.latitude.toString(), this.activeTrail.longitude.toString())
          .subscribe(result => {
            this.trailWeather = result;
            console.log(result);
          });
      }
    });
    console.log(this.route.snapshot);
    console.log(this.route.snapshot.params.id);
  }

  back() {
    this.router.navigate(['/list-of-trails']);
  }

  openReviewDialog(): void {
    const dialogRef = this.dialog.open(WriteAReviewComponent, {
      width: '500px',
      data: {review: this.review}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.review = result;
      console.log(result);
    });
  }

  showReviews() {
    document.getElementById('reviewsOn').style.display = "block";
  }
}
