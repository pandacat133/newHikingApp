import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase/app';
import {Router} from '@angular/router';
import {CreateUserService} from './services/create-user.service';

export interface User {
  displayName: string;
  email: any;
  photoURL: string;
  uid: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  currentUser: any;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private createUserService: CreateUserService,
  ) {

    afAuth.authState.subscribe((user: firebase.User) => {
      this.currentUser = user;
    });
    }

  ngOnInit() {

  }

  loginBtn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(authenticated => {
      console.log(authenticated);

      if (authenticated.additionalUserInfo.isNewUser) {
        const newUser: User = {
          displayName: authenticated.user.displayName,
          email: authenticated.user.email,
          photoURL: authenticated.user.photoURL,
          uid: authenticated.user.uid
        };
        console.log('saving user');
        this.createUserService.saveUser(newUser);
      }
    });
  }

  logoutBtn(){
    this.afAuth.auth.signOut();
  }
}
