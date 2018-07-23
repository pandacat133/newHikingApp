import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {CreateUserService} from '../../services/create-user.service';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

export interface User {
  displayName: string;
  email: any;
  photoURL: string;
  uid: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  createUser: Observable<any[]>;
  public location = ''; //Celie's code. Don't delete.
  private userCollection: AngularFirestoreCollection<User>;
  users: Observable<any[]>;

  constructor(
    private db: AngularFirestore,
    private router: Router,
  ) {
    //Celie's code. Don't delete:
    this.location = router.url;
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        console.log(route);
        this.location = route.url;
      }
    });
    //------------------

    this.createUser = db.collection('userProfile').valueChanges();
    console.log(this.createUser);
    this.userCollection = this.db.collection<User>('userProfile');
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  ngOnInit() {
  }
}
