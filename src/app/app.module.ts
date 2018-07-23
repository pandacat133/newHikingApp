import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { TrailsService } from './services/trails.service';
import { WeatherService } from './services/weather.service';
import { MapsService } from './services/maps.service';
import { CreateUserService } from "./services/create-user.service";
import { DataService } from './services/data.service';
import { environments } from '../environments/environments';

import { ListOfTrailsComponent } from './components/list-of-trails/list-of-trails.component';
import { TrailDetailsComponent } from './components/trail-details/trail-details.component';
import { WriteAReviewComponent } from './components/write-a-review/write-a-review.component';
import { AppComponent } from './app.component';
import { StarsComponent } from './components/stars/stars.component';
import { HomeComponent } from './components/home/home.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from 'angularfire2/storage';
import { LoginComponent } from './components/login/login.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListOfTrailsComponent,
    TrailDetailsComponent,
    WriteAReviewComponent,
    StarsComponent,
    LoginComponent,
    ErrorPageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environments.firebase),
    BrowserModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: "home", component: HomeComponent },
      { path: "error-page", component: ErrorPageComponent},
      { path: "list-of-trails", component: ListOfTrailsComponent },
      { path: "trail-details", component: TrailDetailsComponent },
      { path: "write-a-review", component: WriteAReviewComponent },
      { path: "stars", component: StarsComponent },
    ], {enableTracing: true})
  ],
  entryComponents: [
    WriteAReviewComponent
  ],
  providers: [
    TrailsService,
    WeatherService,
    MapsService,
    CreateUserService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
