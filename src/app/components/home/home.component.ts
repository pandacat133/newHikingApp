import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  zipcode: string;
  zip: string;

  constructor(
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.data.currentZip.subscribe(zip => this.zip = zip);
    this.zipcode = '';
  }

  searchBtn() {
    this.data.changeZip(this.zipcode);

    if(this.zipcode === '') {
      this.router.navigate(['/error-page']);
    }
  }

  onEnter(event) {
    if (event.key === "Enter") {
      this.searchBtn();
    }
    this.router.navigate(['/list-of-trails']);
  }

}
